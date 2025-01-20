"use client";

import Image from "next/image";
import React from "react";

export default function ServiceCard({ img, title, description }) {
  return (
    <div className="relative shadow-md text-[#051242] flex flex-col gap-3 justify-center items-center m-4 p-[20px] md:p-[30px] rounded-md overflow-hidden group">
      <div className="absolute inset-0 bg-[#051242] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]">
          <Image
            width={60}
            height={60}
            src={img}
            alt="service"
            layout="responsive"
          />
        </div>
        <p className="text-[21px] font-bold group-hover:text-white transition-colors duration-500">
          {title}
        </p>
        <p className="text-center text-[#80839d] group-hover:text-[#c3c3c4] transition-colors duration-500">
          {description}
        </p>
        <button className="text-[14px] font-semibold group-hover:text-white transition-colors duration-500">
          Read more
        </button>
      </div>
    </div>
  );
}
