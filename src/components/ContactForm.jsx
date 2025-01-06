import Image from "next/image";
import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-[#F5FAFF]">
      <div className="text-center py-20 max-w-[1300px] mx-auto space-y-3">
        <h2 className="text-[14px] text-[#3D59FA]">Contact Us</h2>
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-[#051242]">Let Us Know About Your Project Idea!</h1>
        <p className="w-[60%] mx-auto text-[15px] text-[#7A7E9A]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel
          consequatur tempora atque blanditiis exercitationem incidunt, alias
          corporis quam assumenda dicta.
        </p>
      </div>
      <div className="grid md:grid-cols-2 py-4 md:w-[85%] mx-auto">
        <div className="flex items-center justify-center">
          <Image src="/contact.png" width={500} height={500} />
        </div>
        <div className="py-5">
          <form className="w-[75%] mx-auto flex flex-col gap-5 bg-white p-5 rounded-md">
            <input className="bg-[#F5FAFF] py-2 pl-3 focus:outline-[#3D59FA]" type="text" placeholder="Your Name" />
            <input className="bg-[#F5FAFF] py-2 pl-3 focus:outline-[#3D59FA]" type="email" placeholder="Your Email" />
            <input className="bg-[#F5FAFF] py-2 pl-3 focus:outline-[#3D59FA]" type="text" placeholder="Your Phone Number" />
            <textarea
              className="bg-[#F5FAFF] py-2 pl-3 focus:outline-[#3D59FA]"
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Your Message"
            ></textarea>
            <button className="bg-[#3D59FA] rounded-md text-white w-fit mx-auto px-8 py-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
