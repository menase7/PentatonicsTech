"use client";

import React from "react";
import BlogCard from "./BlogCard";

export default function Blogs() {
  const blogs = [
    {
      img: "/team1.jpg",
      title: "Temperature App UX Studies & Development Case",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pleasure in flees the smallest ways perspiciatis nam aspernatur porro",
      date: "april 10, 2024",
    },
    {
      img: "/team3.jpg",
      title: "Joe's Company Software Development Case",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pleasure in flees the smallest ways perspiciatis nam aspernatur porro",
      date: "april 20, 2024",
    },
    {
      img: "/team2.jpg",
      title: "IT Software Company Development Case",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pleasure in flees the smallest ways perspiciatis nam aspernatur porro",
      date: "april 30, 2024",
    }
  ];

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-[14px] text-[#3D59FA]">Blog Post</h2>
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-[#051242]">
          Our Regular Blogs
        </h1>
        <p className="md:w-[60%] mx-auto text-[15px] text-[#7A7E9A]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel
          consequatur tempora atque blanditiis exercitationem incidunt, alias
          corporis quam assumenda dicta.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:px-5">
        {
          blogs.map((blog, index)=>(
            <BlogCard key={index} img={blog.img} title={blog.title} description={blog.description} date={blog.date} />
          ))
        }
      </div>
    </div>
  );
}
