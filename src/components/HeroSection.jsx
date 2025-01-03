import React from "react";

export default function HeroSection() {
  return (
    <div
      className="lg:grid lg:grid-cols-2 lg:items-center bg-cover bg-center h-fit lg:h-screen w-full"
      style={{ backgroundImage: 'url("/home.png")' }}
    >
      <div className="mx-auto max-w-[70%] space-y-5 lg:space-y-10 max-lg:pt-32">
        <h1 className="text-white text-[36px] lg:text-[40px] font-bold text-center">
          Trusted Effective Service and Solutions
        </h1>
        <h3 className="text-[15px] text-white text-center">
          It is very important to take care of the patient, the patient will be
          followed by the patient, and at the same time they will experience
          some great pain. Who had suspended him.
        </h3>
        <div className="flex justify-center lg:justify-start gap-5 text-[14px] text-[#F5FAFF]">
          <button className="h-[40px] w-[112px] bg-[#3D59FA] rounded-md hover:bg-[#F5FAFF] hover:text-[#051242] ease-in-out delay-100">
            Contact Us
          </button>
          <button className="h-[40px] w-[112px] border-[#F5FAFF] border-2 rounded-md hover:bg-[#F5FAFF] hover:text-[#051242] ease-in-out delay-100">
            Know More
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] mx-auto py-7">
          <img className="w-full" src="/banner-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
