"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function BlogCard({ id, img, title, description, date }) {
  const router = useRouter();
  const maxDescriptionLength = 200;

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleReadMore = () => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className="relative bg-[#F5FAFF] my-3 flex flex-col items-center justify-center group rounded-t-lg overflow-hidden">
      <div className="absolute inset-0 bg-[#374168] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

      <div className="relative z-10 w-auto">
        <Image
          className="w-[355px] md:w-[410px] h-[300px] rounded-t-sm overflow-hidden object-cover"
          src={img}
          width={300}
          height={200}
          alt="team card"
        />
      </div>
      <div className="relative z-10 pb-3 max-w-[350px] md:max-w-[400px] h-fit text-start flex flex-col items-center justify-center px-3">
        <p className="text-start w-full text-[#80839d] group-hover:text-[#c0c0c3] pt-2 text-sm">{date}</p>
        <h1 className="py-2 text-[21px] text-[#051242] font-bold group-hover:text-white transition-colors duration-500">
          {title}
        </h1>
        <p className="text-[14px] text-[#8689a3] group-hover:text-[#c0c0c3] transition-colors duration-500">
          {truncateDescription(description, maxDescriptionLength)}
        </p>
        <button
          onClick={handleReadMore}
          className="w-full text-start pt-1 group-hover:text-white transition-colors duration-500 text-[#051242]"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
