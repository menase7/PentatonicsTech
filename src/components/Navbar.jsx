"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
        scrolled
          ? "bg-[#051242] shadow-sm shadow-gray-200"
          : "bg-transparent mt-14"
      }`}
    >
      <ul className="flex max-w-[1300px] mx-auto max-lg:hidden w-full justify-start items-center gap-10 text-[18px] text-white">
        {["home", "about", "services", "blog", "contact"].map((item) => (
          <li
            key={item}
            className="hover:text-[#3D59FA] cursor-pointer delay-100"
          >
            <a
              href={item === "about" ? "/about" : `/#${item}`}
              onClick={(e) => {
                if (item !== "about") {
                  handleClick(e, item);
                }
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="lg:hidden w-full flex items-center">
        <div className="mx-6 flex items-center justify-between w-full relative">
          <div className="flex items-center gap-2">
            <div className="h-[40px] w-[40px]">
              <Image
                width={40}
                height={40}
                className="h-full w-full object-cover"
                src="/logo.png"
                alt="logo"
              />
            </div>
            <p className="text-[#3D59FA] text-3xl font-bold">PentatonicsTech</p>
          </div>
          <div className="w-full flex justify-end">
            <div className="flex bg-[#F5FAFF] items-center justify-center p-2">
              <button
                className="relative w-9 h-6 flex flex-col justify-between items-center group"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`block h-[2px] w-full bg-[#3D59FA] rounded transition-all duration-200 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-[10px]" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[2px] w-full bg-[#3D59FA] rounded transition-all duration-200 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[2px] w-full bg-[#3D59FA] rounded transition-all duration-200 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-[12px]" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
          {isOpen && (
            <div>
              <ul className="absolute top-[64px] left-0 w-full bg-[#051242] text-white text-start transform transition-transform duration-300 ease-in-out animate-slide-down">
                {["home", "about", "services", "blog", "contact"].map(
                  (item) => (
                    <li
                      key={item}
                      className="py-4 pl-6 border-b border-[#3D59FA]"
                    >
                      <a
                        href={item === "about" ? "/about" : `/#${item}`}
                        onClick={(e) => {
                          if (item !== "about") {
                            handleClick(e, item);
                          }
                        }}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
