import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs/promises";
import path from "path";
import { Readable } from "stream";
import connectToDatabase from "@/lib/db";
import BlogPost from "@/models/BlogPost";
import Subscriber from "@/models/Subscriber";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper: Convert NextRequest to Node.js Readable Stream
const toNodeReadable = async (nextReq) => {
  const buffer = await nextReq.arrayBuffer();
  const readable = new Readable();
  readable.push(Buffer.from(buffer));
  readable.push(null); // Signal end of the stream
  return readable;
};

// Parse the form data using formidable
const parseForm = async (req) => {
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  // Ensure the uploads directory exists
  await fs.mkdir(uploadDir, { recursive: true });

  const form = new IncomingForm({
    uploadDir, // Directory for uploaded files
    keepExtensions: true, // Preserve file extensions
    multiples: true, // Allow multiple files
    maxFileSize: 5 * 1024 * 1024, // 5 MB file size limit
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

export async function POST(req) {
  try {
    // Parse form data
    const rawReq = await toNodeReadable(req);
    rawReq.headers = Object.fromEntries(req.headers);
    const { fields, files } = await parseForm(rawReq);

    console.log("Parsed Fields:", fields);
    console.log("Parsed Files:", files);

    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const content = Array.isArray(fields.content)
      ? fields.content[0]
      : fields.content;

    const imageFile = files.image ? files.image[0] : null;
    const imagePath = imageFile
      ? `/uploads/${path.basename(imageFile.filepath)}`
      : null;

    console.log("Image Path:", imagePath);

    if (!title || !content) {
      return NextResponse.json(
        { message: "Title and content are required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Save the blog post
    const newPost = new BlogPost({
      title,
      content,
      image: imagePath,
    });
    await newPost.save();

    console.log("Blog post created:", newPost);

    const subscribers = await Subscriber.find({ isSubscribed: true });

    if (subscribers.length > 0) {
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Create email content
      const emailSubject = `New Blog Post: ${newPost.title}`;
      const emailText = `A new blog post has been published:\n\n${newPost.title}\n\n${newPost.content}\n\nRead more on our website!`;

      // Send email to all subscribers
      const emailPromises = subscribers.map((subscriber) => {
        return transporter.sendMail({
          from: "menasedebel838@gmail.com",
          to: subscriber.email,
          subject: emailSubject,
          text: emailText,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); overflow: hidden;">
  <div style="background-color: #3D59FA; color: #ffffff; text-align: center; padding: 20px;">
    <h1 style="margin: 0; font-size: 24px; line-height: 1.5;">${newPost.title}</h1>
  </div>

  <div style="text-align: center; padding: 20px;">
    <img src="https://pentatonics-tech.vercel.app${newPost.image}" alt="${newPost.title}" style="width: 100%; max-width: 560px; border-radius: 8px;" />
  </div>

  <div style="padding: 20px; color: #333333;">
    <p style="line-height: 1.6; margin-bottom: 15px;">${newPost.content}</p>
  </div>

  <div style="text-align: center; margin-top: 20px; padding-bottom: 20px;">
    <a href="https://pentatonics-tech.vercel.app/blog/${newPost._id}" style="display: inline-block; padding: 10px 20px; background-color: #3D59FA; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px;">
      Read More
    </a>
  </div>
</div>
          `,
        });
      });

      await Promise.all(emailPromises);

      console.log("Emails sent to subscribers");
    } else {
      console.log("No subscribers found");
    }

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: `Error creating blog post: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await connectToDatabase();

    const posts = await BlogPost.find();

    const updatedPosts = posts.map((post) => ({
      ...post._doc,
      image: post.image || null,
    }));

    return NextResponse.json(updatedPosts, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: `Error fetching blog posts: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    // Parse form data
    const rawReq = await toNodeReadable(req);
    rawReq.headers = Object.fromEntries(req.headers);
    const { fields, files } = await parseForm(rawReq);

    console.log("Parsed Fields:", fields);
    console.log("Parsed Files:", files);

    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const content = Array.isArray(fields.content)
      ? fields.content[0]
      : fields.content;

    const imageFile = files.image ? files.image[0] : null;
    const imagePath = imageFile
      ? `/uploads/${path.basename(imageFile.filepath)}`
      : null;

    console.log("Image Path:", imagePath);

    if (!title || !content) {
      return NextResponse.json(
        { message: "Title and content are required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Find the existing blog post by ID
    const existingPost = await BlogPost.findById(id);
    if (!existingPost) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    // Update the blog post fields
    existingPost.title = title;
    existingPost.content = content;
    if (imagePath) {
      existingPost.image = imagePath;
    }

    // Save the updated blog post
    await existingPost.save();

    console.log("Blog post updated:", existingPost);

    // Return the updated blog post in the response
    return NextResponse.json(existingPost, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: `Error updating blog post: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");

    if (blogId) {
      const deletedPost = await BlogPost.findByIdAndDelete(blogId);

      if (!deletedPost) {
        return NextResponse.json(
          { message: "Blog post not found." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "Blog post deleted successfully.", deletedPost },
        { status: 200 }
      );
    } else {
      const result = await BlogPost.deleteMany({});
      return NextResponse.json(
        {
          message: `All blog posts deleted successfully. Total deleted: ${result.deletedCount}`,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: `Error deleting blog posts: ${error.message}` },
      { status: 500 }
    );
  }
}
