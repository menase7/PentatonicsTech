import React from "react";
import TeamCard from "./TeamCard";


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
    }
  ]
  return (
    <div>
      <div>
        <h2 className="text-[14px] text-[#3D59FA]">Team Members</h2>
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-[#051242]">People Who Are Behind The Achievements</h1>
        <p className="w-[60%] mx-auto text-[15px] text-[#7A7E9A]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          repellendus tempora odit ipsum, exercitationem possimus voluptate hic
          doloremque provident expedita suscipit sint!
        </p>
      </div>
      {/* slider */}

      <div className="flex w-[80%] mx-auto gap-3 overflow-auto">
        {
          teams.map((team, index)=>(
            <TeamCard key={index} img={team.img} name={team.name} role={team.role} />
          ))
        }
      </div>
    </div>
  );
}
