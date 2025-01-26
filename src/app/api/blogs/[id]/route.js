import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import BlogPost from "@/models/BlogPost";

export async function GET(req, { params }) {
  try {
    await connectToDatabase();

    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const post = await BlogPost.findById(id);
    if (!post) {
      return NextResponse.json({ message: "Blog post not found" }, { status: 404 });
    }

    return NextResponse.json({ ...post._doc, image: post.image || null }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: `Error fetching blog post: ${error.message}` },
      { status: 500 }
    );
  }
}
