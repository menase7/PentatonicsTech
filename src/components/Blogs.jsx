"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (response.ok) {
          const data = await response.json();
          console.log("the blogs",data)
          setBlogs(data);
        } else {
          throw new Error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div id="blog" className="max-w-[1300px] mx-auto my-10">
      <div className="text-center space-y-3">
        <h2 className="text-[14px] text-[#3D59FA]">Blog Post</h2>
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-[#051242]">
          Updates, Insights, and More
        </h1>
        <p className="md:w-[60%] mx-auto text-[15px] text-[#7A7E9A]">
          Explore our blog for the latest updates, achievements, and insights
          from our startup journey. Stay tuned for exciting milestones as we
          continue to grow and make an impact in Ethiopian music education.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start sm:px-5">
        {loading ? (
          <div className="col-span-full flex justify-center items-center my-10">
            <PropagateLoader color="#3D59FA" size={15} />
          </div>
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id} 
              id={blog._id} 
              img={blog.image} 
              title={blog.title}
              description={blog.content}
              date={new Date(blog.createdAt).toLocaleDateString()}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No blogs available.</p>
        )}
      </div>
    </div>
  );
}
