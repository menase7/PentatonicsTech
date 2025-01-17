"use client";

import React from "react";
import ServiceCard from "./ServiceCard";


export default function ServiceSection() {
  let services = [
    {
      img: "/service1.png",
      title: "Visual Design",
      description:
        "The company itself is a very successful company. And even if it is the most to be assumed. elders, great",
    },
    {
      img: "/service2.png",
      title: "Development",
      description:
        "The company itself is a very successful company. And even if it is the most to be assumed. elders, great",
    },
    {
      img: "/service4.png",
      title: "It Management",
      description:
        "The company itself is a very successful company. And even if it is the most to be assumed. elders, great"
    },
  ]

  return (
    <div className="container py-20 max-w-[1300px] mx-auto">
      <div className="text-center mb-[30px] lg:mb-[60px] max-w-[695px] mx-auto space-y-2">
        <p className="text-[14px] text-[#3D59FA]">Smart Service</p>
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-[#051242]">Provide All Kind Of Tech Solutions</h1>
        <p className="w-[90%] mx-auto text-[15px] text-[#7A7E9A]">
          It is important to take care of the patient, to be followed by the
          patient, but it will happen at such a time that there is a lot of work
          and pain. Who had suspended him.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {
          services.map((service, index)=>(
            <ServiceCard key={index} img={service.img} title={service.title} description={service.description} />
          ))
        }
      </div>
    </div>
  );
}
