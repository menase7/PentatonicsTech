import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  let services = [
    {
      img: "/service1.png",
      title: "Research Product",
      description:
        "It is very important for the customer to be aware of the customer's needs, but this is what happens at the same time.",
    },
    {
      img: "/service2.png",
      title: "User Testing",
      description:
        "It is very important for the customer to be aware of the customer's needs, but this is what happens at the same time.",
    },
    {
      img: "/service4.png",
      title: "Development",
      description:
        "It is very important for the customer to be aware of the customer's needs, but this is what happens at the same time.",
    },
    {
      img: "/service4.png",
      title: "Product Handover",
      description:
        "It is very important for the customer to be aware of the customer's needs, but this is what happens at the same time.",
    },
  ];

  return (
    <div className="container bg-[#051242] text-white py-20 max-w-[1300px] mx-auto">
      <div className="text-center mb-[30px] lg:mb-[60px] max-w-[695px] mx-auto space-y-2">
        <p className="text-[14px]">Working Process</p>
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold">
          We are popular because of our way of working
        </h1>
        <p className="w-[90%] mx-auto text-[15px] text-[#bebfc7]">
          It is important to take care of the patient, to be followed by the
          client, but at the same time they will be affected by some great pains
          and sufferings. Who had suspended him.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <ProjectCard
            key={index}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
