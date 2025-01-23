"use client";

import Image from "next/image";
import React from "react";
import { FaFacebook, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
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

  // Ease-in-out quadratic function
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const handleClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <div
      className="font-sans text-open mx-auto text-white py-5 text-[15px] bg-cover bg-center w-full"
      style={{ backgroundImage: 'url("/home.png")' }}
    >
      <div className="max-lg:w-[80%] lg:px-5 xl:px-3 max-w-[1300px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-3 space-y-5 lg:space-x-20 py-5">
        <div className="flex flex-col lg:mr-10 gap-6 pb-7 w-fit">
          <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px]">
              <Image src="/logo.png" width={100} height={100} alt="logo" />
            </div>
            <p className="text-[#fff] text-3xl font-bold">PentatonicsTech</p>
          </div>
          <p>
            It's very important to have a good customer, let the customer know,
            but that's the way it is.
          </p>
          <div className="flex rounded-md h-[50px] max-w-[300px]">
            <input
              className="bg-transparent border-2 w-full pl-3"
              placeholder="Your email"
              type="email"
              name=""
            />
            <button className="bg-[#3D59FA] rounded-r-md text-white px-3 -ml-1">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-3 text-[#3D59FA]">
            <a className="bg-[#3D59FA] text-white p-3 rounded-md" href="">
              <FaFacebook className="cursor-pointer" />
            </a>
            <a className="bg-[#3D59FA] text-white p-3 rounded-md" href="">
              <FaTiktok className="cursor-pointer" />
            </a>
            <a className="bg-[#3D59FA] text-white p-3 rounded-md" href="">
              <FaYoutube className="cursor-pointer" />
            </a>
            <a
              className="bg-[#3D59FA] text-white p-3 rounded-md"
              href="https://t.me/pentatonicstech"
            >
              <FaTelegram className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="space-y-2 md:pl-10 max-lg:pl-0">
          <p className="text-[22px] font-semibold">Our Service</p>
          <ul className="space-y-2">
            <div className="h-[1px] bg-[#c2c2c2]"></div>
            <li>Visual Design</li>
            <li>Development</li>
            <li>It Management</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-[22px] font-semibold">Quick Links</p>
          <ul className="space-y-2">
            <div className="h-[1px] bg-[#c2c2c2]"></div>
            <li>FAQs</li>
            <li>Services</li>
            <li>Career</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Data Analysis</li>
          </ul>
        </div>
        <div className="space-y-2 md:pl-10 max-lg:pl-0">
          <p className="text-[22px] font-semibold">Contact</p>
          <ul className="space-y-2">
            <div className="h-[1px] bg-[#c2c2c2]"></div>
            <li>
              <a href="tel:+251941620480">+251941620480</a>
            </li>
            <li>
              <a href="mailto:pentatonics77@gmail.com">
                pentatonics77@gmail.com
              </a>
            </li>
            <li>
              <a href="pentatonics-tech.vercel.app">pentatonicstech.com</a>
            </li>
            <li>
              <address>Addis Ababa, Ethiopia</address>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[1px] bg-[#c2c2c2]"></div>
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-2 pt-3 px-5">
        <div>
          <ul className="flex max-w-[1300px] mx-auto w-full justify-start items-center gap-3 md:gap-6 text-[16px] text-white">
            {["home", "about", "services", "blog", "contact"].map((item) => (
              <li
                key={item}
                className="hover:text-[#3D59FA] cursor-pointer delay-100"
              >
                <a href={`#${item}`} onClick={(e) => handleClick(e, item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-center">
            copyright &copy; 2025 PentatonicsTech. All Rights Reserved by{" "}
            <a
              className="text-[#E13259]"
              href="https://pentatonics-tech.vercel.app/"
            >
              pentatonicstech.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
