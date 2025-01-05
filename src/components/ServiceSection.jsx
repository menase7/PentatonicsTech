import React from "react";
import ServiceCard from "./ServiceCard";
import img1 from "service1.png";
import img2 from "../../public/service2.png";
import img3 from "../../public/service4.png";

export default function ServiceSection() {
  return (
    <div>
      <div className="text-center">
        <p>Smart Service</p>
        <h1>Provide All Kind Of Tech Solutions</h1>
        <p className="w-[90%] mx-auto">
          It is important to take care of the patient, to be followed by the
          patient, but it will happen at such a time that there is a lot of work
          and pain. Who had suspended him.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {/* //img, title, description */}
        <ServiceCard
          img={img1}
          title="Visual Design"
          description="The company itself is a very successful company. And even if it is the most to be assumed. elders, great"
        />
        <ServiceCard
          img={img2}
          title="Development"
          description="The company itself is a very successful company. And even if it is the most to be assumed. elders, great"
        />
        <ServiceCard
          img={img3}
          title="Development"
          description="The company itself is a very successful company. And even if it is the most to be assumed. elders, great"
        />
      </div>
    </div>
  );
}
