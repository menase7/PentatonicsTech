"use client"; // Ensures the component is rendered client-side

import { useState, useEffect } from "react";
import Image from "next/image";
import { PropagateLoader } from "react-spinners"; // Ensure this is installed and imported

async function fetchBlog(id) {
  const res = await fetch(`/api/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch the blog");
  return res.json();
}

export default function BlogPage({ params }) {
  const { id } = params;
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Default to true for initial load

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await fetchBlog(id);
        setBlog(data);
      } catch (err) {
        setError("Error fetching blog data.");
      } finally {
        setLoading(false); // Ensure loading is false after the operation
      }
    };

    getBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="col-span-full h-[500px] flex justify-center items-center my-10">
        <PropagateLoader color="#3D59FA" size={15} />
      </div>
    );
  }

  if (error) return <p>{error}</p>;
  if (!blog) return <p>No blog data available.</p>;

  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4 mt-28 lg:mt-20">
      <h1 className="text-3xl font-bold text-[#051242] mb-4">{blog.title}</h1>
      <div className="relative w-full h-[500px] mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-sm text-[#80839d] mb-6">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <p className="text-lg text-[#8689a3] leading-relaxed">{blog.content}</p>
    </div>
  );
}
