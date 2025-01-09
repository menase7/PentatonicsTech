import Image from "next/image";
import React from "react";

export default function TestimonialCard({ img, name, role, review }) {
  return (
    <div className="bg-white max-h-[400px] flex flex-col items-center justify-center group relative shadow-md p-4 mx-5">
      <div className="size-[60px]">
        <Image src={img} width={100} height={100} alt={name} />
      </div>
      <div className="text-[#8689a3] w-[90%] text-center mt-4">
        {review}
      </div>
      <div className="text-center mt-4">
        <p className="py-2 text-[21px] font-bold">{name}</p>
        <p className="text-[14px] text-[#8689a3]">{role}</p>
      </div>
    </div>
  );
}
