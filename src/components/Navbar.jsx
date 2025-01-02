"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed flex top-0 left-0 w-full h-[88px] z-50 transition-all duration-100 ${
        scrolled ? " shadow-lg" : "bg-transparent mt-14"
      }`}>
      <ul className="flex max-w-[1300px] mx-auto max-lg:hidden w-full justify-start items-center gap-10 text-[18px] text-white">
        <li className="hover:text-[#3D59FA] cursor-pointer delay-100">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-[#3D59FA] cursor-pointer delay-100">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-[#3D59FA] cursor-pointer delay-100">
          <a href="#solutions">Solutions</a>
        </li>
        <li className="hover:text-[#3D59FA] cursor-pointer delay-100">
          <a href="#blog">Blog</a>
        </li>
        <li className="hover:text-[#3D59FA] cursor-pointer delay-100">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="lg:hidden bg-[#051242] w-full flex items-center">
        <div className="mx-6 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="h-[40px] w-[40px]">
              <img
                className="h-full w-full object-cover"
                src="/logo.jpg"
                alt="logo"
              />
            </div>
            <p className="text-[#3D59FA] text-3xl font-bold">PentatonicsTech</p>
          </div>
          <div className="flex bg-[#F5FAFF] items-center justify-center p-2">
            <button
              className="relative w-10 h-8 flex flex-col justify-between items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`block h-1 w-full bg-[#3D59FA] rounded transition-all duration-200 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-[14px]" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-[#3D59FA] rounded transition-all duration-200 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-full bg-[#3D59FA] rounded transition-all duration-200 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-[14px]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
