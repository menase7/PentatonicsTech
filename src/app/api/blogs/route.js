import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs/promises";
import path from "path";
import { Readable } from "stream";
import connectToDatabase from "@/lib/db";
import BlogPost from "@/models/BlogPost";
import Subscriber from "@/models/Subscriber";
import nodemailer from 'nodemailer';

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

    console.log('Parsed Fields:', fields);
    console.log('Parsed Files:', files);

    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const content = Array.isArray(fields.content) ? fields.content[0] : fields.content;

    const imageFile = files.image ? files.image[0] : null;
    const imagePath = imageFile ? `/uploads/${path.basename(imageFile.filepath)}` : null;

    console.log('Image Path:', imagePath);

    if (!title || !content) {
      return NextResponse.json(
        { message: 'Title and content are required' },
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

    console.log('Blog post created:', newPost);

    // Send email to subscribers
    const subscribers = await Subscriber.find({ isSubscribed: true });

    if (subscribers.length > 0) {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Change this to your email service
        auth: {
          user: "menasedebel838@gmail.com", // Your email
          pass: "iefd bzlj fept fpyq", // Your email password
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
            <h1>${newPost.title}</h1>
            <p>${newPost.content}</p>
            <a href="http://yourwebsite.com/blog/${newPost._id}">Read more</a>
          `,
        });
      });

      await Promise.all(emailPromises);

      console.log('Emails sent to subscribers');
    } else {
      console.log('No subscribers found');
    }

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error:', error);
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

    console.log('Parsed Fields:', fields);
    console.log('Parsed Files:', files);

    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const content = Array.isArray(fields.content) ? fields.content[0] : fields.content;

    const imageFile = files.image ? files.image[0] : null;
    const imagePath = imageFile ? `/uploads/${path.basename(imageFile.filepath)}` : null;

    console.log('Image Path:', imagePath);

    if (!title || !content) {
      return NextResponse.json(
        { message: 'Title and content are required' },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Find the existing blog post by ID
    const existingPost = await BlogPost.findById(id);
    if (!existingPost) {
      return NextResponse.json(
        { message: 'Blog post not found' },
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

    console.log('Blog post updated:', existingPost);

    // Return the updated blog post in the response
    return NextResponse.json(existingPost, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
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