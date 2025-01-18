"use client";

import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

export default function Testimonials() {
  const clients = [
    {
      img: "/client1.jpg",
      name: "Steven John",
      role: "CEO of Company",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet.",
    },
    {
      img: "/client2.jpg",
      name: "Jacson Max",
      role: "Company Founder",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet.",
    },
    {
      img: "/client3.jpg",
      name: "Johnny Niro",
      role: "React Developer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],    
  };

  let sliderRef = null;

  const nextSlide = () => {
    sliderRef.slickNext();
  };

  const prevSlide = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="bg-[#F5FAFF] py-10">
      <div className="my-10 max-w-[1300px] px-5 mx-auto">
        <div className="text-center py-20 space-y-3">
          <h2 className="text-[14px] text-[#3D59FA]">Testimonials</h2>
          <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-[#051242]">
            What Our Client's Say
          </h1>
          <p className="w-[85%] lg:w-[60%] mx-auto text-[15px] text-[#7A7E9A]">
            The company itself is a very successful company. From easy or
            consequential times and caresses fall the exercise, other than the
            body said to assume.
          </p>
        </div>
        <div className="relative overflow-x-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-md shadow-lg z-10 flex-shrink-0"
            style={{ marginRight: '10px' }}
          >
            &lt;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-md shadow-lg z-10 flex-shrink-0"
            style={{ marginLeft: '10px' }}
          >
            &gt;
          </button>

          <Slider
            ref={(slider) => (sliderRef = slider)}
            className="flex justify-center items-center gap-4"
            {...settings}
          >
            {clients.map((client, index) => (
              <TestimonialCard
                key={index}
                img={client.img}
                name={client.name}
                role={client.role}
                review={client.review}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
