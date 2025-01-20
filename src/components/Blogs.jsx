"use client";

import React from "react";
import BlogCard from "./BlogCard";

export default function Blogs() {
  const blogs = [
    {
      img: "/selected.png",
      title:
        "Exciting News: Our Startup Is Selected for OIH’s Prestigious Program!",
      description:
        "We are excited to announce that our startup has been selected for the OIH program, facilitated in partnership with the Mastercard Foundation and Ethiopian Airlines. This incredible opportunity provides mentorship, funding, and networking to help us expand and take our platform to new heights",
      date: "april 10, 2024",
    },
    {
      img: "/certeficate.png",
      title:
        "We’ve Received Certification in Business Development and Product Innovation!",
      description:
        "We’re thrilled to announce that our team has successfully completed the Basics of Business Development Training, Consultation, and Product Development Masterclass provided by Orbit Innovation Hub. This certification marks a significant achievement in strengthening our skills in business strategy and product innovation",
      date: "april 20, 2024",
    },
    {
      img: "/ideasharing.png",
      title: "Sharing Our Startup Business Model and How It Works",
      description:
        "Recently, we had the opportunity to share our startup business model with fellow entrepreneurs. It was an exciting experience where we explained how our platform works, the value we bring to our users, and the impact we aim to create.",
      date: "april 30, 2024",
    },
  ];

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
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            img={blog.img}
            title={blog.title}
            description={blog.description}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
}
