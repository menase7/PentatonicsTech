import Image from "next/image";
import React from "react";

export default function BlogCard({ img, title, description, date }) {
  return (
    <div className="bg-[#F5FAFF] my-3 flex flex-col items-center justify-center group relative">
      <div className="w-auto">
        <Image
          className="w-[350px] md:w-[400px] rounded-t-sm"
          src={img}
          width={300}
          height={300}
          alt="team card"
        />
      </div>
      <div className="group-hover:bg-[#051242] text-[#051242] group-hover:text-white pb-3 max-w-[350px] md:max-w-[400px] h-fit text-start flex flex-col items-center justify-center gap-1 px-3">
        <h1 className="py-2 text-[21px] font-bold">{title}</h1>
        <p className="text-[14px] text-[#8689a3] group-hover:text-[#c0c0c3]">
          {description}
        </p>
        <button className="w-full text-start pt-1">Read More</button>
      </div>
    </div>
  );
}
