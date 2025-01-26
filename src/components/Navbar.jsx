"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);

    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const handleClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    if (targetId) {
      smoothScrollTo(targetId);
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
      className={`fixed max-lg:bg-[#051242] flex top-0 left-0 w-full h-[88px] z-50 transition-all duration-100 ${
        scrolled
          ? "bg-[#051242] shadow-sm shadow-gray-200"
          : "bg-transparent mt-14"
      }`}
    >
       {pathname !== "/" ? (
        <div className="max-lg:hidden flex items-center max-w-[1300px] mx-auto w-full">
          <a href="/">
          <button
            className={`${scrolled ? "text-white": "text-[#8e9ef8]"} text-[18px] hover:text-[#3D59FA] cursor-pointer`}
          >
            &larr; Back to Home
          </button>
          </a>
        </div>
      ) : (
        <ul className="flex max-w-[1300px] mx-auto max-lg:hidden w-full justify-start items-center gap-10 text-[18px] text-white">
          {["home", "about", "services", "blog", "contact"].map((item) => (
            <li
              key={item}
              className="hover:text-[#3D59FA] cursor-pointer delay-100"
            >
              <a
                href={
                  item === "about"
                    ? "/about"
                    : item === "home"
                    ? "/"
                    : `/#${item}`
                }
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
      )}

      <div className="lg:hidden w-full flex items-center">
        <div className="mx-6 flex items-center justify-between w-full relative">
          <div className="flex items-center gap-2">
            <a href="/">
              <div className="h-[40px] w-[40px]">
                <Image
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  src="/logo.png"
                  alt="logo"
                />
              </div>
            </a>
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
                      className="py-4 pl-6 border-b border-[#3D59FA] hover:text-[#3D59FA]"
                    >
                      <a
                        href={
                          item === "about"
                            ? "/about"
                            : item === "home"
                            ? "/"
                            : `/#${item}`
                        }
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
