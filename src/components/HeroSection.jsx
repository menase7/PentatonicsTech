"use client";

import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center h-fit w-full"
      style={{ backgroundImage: 'url("/home.png")' }}
    >
      <div className="max-w-[1300px] mx-auto lg:grid lg:grid-cols-2 lg:items-center lg:py-32">
      <div className="mx-auto max-w-[70%] space-y-5 lg:space-y-10 max-lg:pt-32 z-32">
        <h1 className="text-white text-[36px] lg:text-[40px] font-bold text-center">
          Trusted Effective Service and Solutions
        </h1>
        <h3 className="text-[15px] text-white text-center">
          It is very important to take care of the patient, the patient will be
          followed by the patient, and at the same time they will experience
          some great pain. Who had suspended him.
        </h3>
        <div className="flex justify-center lg:justify-start gap-5 text-[14px] text-[#F5FAFF]">
          <a href="#contact">
            <button className="h-[40px] w-[112px] bg-[#3D59FA] rounded-md hover:bg-[#F5FAFF] hover:text-[#051242] ease-in-out delay-100">
              Contact Us
            </button>
          </a>
          <a href="/about">
          <button className="h-[40px] w-[112px] border-[#F5FAFF] border-2 rounded-md hover:bg-[#F5FAFF] hover:text-[#051242] ease-in-out delay-100">
            Know More
          </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] mx-auto py-7">
          <img
            className="w-full animate-custom-scale"
            src="/banner-img.png"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto h-full bg-slate-600">
        {/* Shape 1 */}
        <div className="absolute top-24 left-32 animate-rotate-infinite">
          <Image src="/shape4.png" alt="Shape 1" width={35} height={35} />
        </div>

        {/* Shape 2 */}
        <div className="absolute top-52 right-[100px] lg:right-[700px] animate-triangle-move">
          <Image src="/shape5.png" alt="Shape 2" width={40} height={40} />
        </div>

        {/* Shape 3 */}
        <div className="absolute bottom-52 left-32 animate-rectangle-move">
          <Image src="/shape1.png" alt="Shape 3" width={40} height={40} />
        </div>

        {/* Shape 4 */}
        <div className="absolute bottom-16 right-[300px] lg:right-[700px] animate-rotate-infinite">
          <Image src="/shape3.png" alt="Shape 4" width={45} height={45} />
        </div>

        {/* Shape 5 */}
        <div className="absolute bottom-48 right-16 animate-rectangle-move">
          <Image src="/shape6.png" alt="Shape 4" width={40} height={40} />
        </div>
      </div>
      </div>
    </div>
  );
}
