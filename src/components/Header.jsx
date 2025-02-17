"use client";

import React from "react";
import { FaTelegram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

export default function Header() {
  return (
    <div className="sm:h-[58px] lg:h-[63px] bg-[#F5FAFF] flex items-center">
      <div className="max-w-[1300px] mx-auto flex w-full">
        <a href="/">
          <div className="max-lg:hidden flex items-center gap-1">
            <div className="h-[40px] w-[40px]">
              <img
                className="h-full w-full object-cover"
                src="/logo.png"
                alt="logo"
              />
            </div>
            <p className="text-[#3D59FA] text-3xl font-bold">PentatonicsTech</p>
          </div>
        </a>
        <div className="flex items-center justify-center flex-wrap lg:justify-end max-sm:py-2 gap-1 sm:gap-4 w-full">
          <div className="flex items-center gap-1 text-[#3D59FA]">
            <MdWifiCalling3 />
            <a
              className="text-[#051242] hover:text-[#3D59FA]"
              href="tel:+251941620480"
            >
              +251941620480
            </a>
          </div>
          <div className="flex items-center gap-1 text-[#3D59FA] max-sm:pl-1">
            <IoMdMail />
            <a
              className="text-[#051242] hover:text-[#3D59FA]"
              href="mailto:pentatonics77@gmail.com"
            >
              pentatonics77@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-[#3D59FA]">
            <a href="">
              <FaFacebook className="cursor-pointer" />
            </a>
            <a href="">
              <FaTiktok className="cursor-pointer" />
            </a>
            <a href="">
              <FaYoutube className="cursor-pointer" />
            </a>
            <a href="">
              <FaTelegram className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
