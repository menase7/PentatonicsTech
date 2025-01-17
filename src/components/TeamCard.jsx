"use client";

import Image from "next/image";
import React from "react";
import { FaFacebook, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function TeamCard({ img, name, role }) {
  return (
    <div className="bg-[#F5FAFF] my-3 w-fit flex flex-col items-center justify-center group relative">
      <Image src={img} width={300} height={300} alt="team card" />
      <div className="group-hover:bg-[#051242] text-[#051242] group-hover:text-white pb-3 w-full h-full">
        <div className="absolute bottom-[86px] left-14 right-14 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <a className="bg-[#3D59FA] text-white p-2 rounded-md" href="">
            <FaFacebook className="cursor-pointer" />
          </a>
          <a className="bg-[#3D59FA] text-white p-2 rounded-md" href="">
            <FaTiktok className="cursor-pointer" />
          </a>
          <a className="bg-[#3D59FA] text-white p-2 rounded-md" href="">
            <FaYoutube className="cursor-pointer" />
          </a>
          <a className="bg-[#3D59FA] text-white p-2 rounded-md" href="">
            <FaTelegram className="cursor-pointer" />
          </a>
        </div>
        <h1 className="py-2 text-[21px] font-bold">{name}</h1>
        <p className="text-[14px] text-[#8689a3] group-hover:text-[#c0c0c3]">{role}</p>
      </div>
    </div>
  );
}
