"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "./TeamCard";
import Slider from "react-slick";

export default function TeamMember() {
  const teams = [
    {
      img: "/team1.jpg",
      name: "Menase D.",
      role: "Founder & CEO",
    },
    {
      img: "/team3.jpg",
      name: "Ephraim D.",
      role: "Full-stack Developer",
    },
    {
      img: "/team2.jpg",
      name: "John Doe",
      role: "Marketing Manager",
    },
    {
      img: "/team4.jpg",
      name: "Jane Doe",
      role: "Finance Manager",
    },
  ];

  const settings = {
    dots: true,
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

  return (
    <div className="text-center pt-20 max-w-[1300px] mx-auto">
      <div className="space-y-3">
        <h2 className="text-[14px] text-[#3D59FA]">Team Members</h2>
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-[#051242]">
          People Who Are Behind The Achievements
        </h1>
        <p className="w-[80%] mx-auto text-[15px] text-[#7A7E9A]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          repellendus tempora odit ipsum, exercitationem possimus voluptate hic
          doloremque provident expedita suscipit sint!
        </p>
      </div>

      <div className="w-[90%] mx-auto mt-6">
        <Slider
          className="flex justify-center items-center"
          {...settings}>
          {teams.map((team, index) => (
            <div key={index} className="flex justify-center items-center">
              <TeamCard img={team.img} name={team.name} role={team.role} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
