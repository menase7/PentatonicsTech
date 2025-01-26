"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F5FAFF]" id="contact">
      <div className="max-w-[1300px] mx-auto py-20">
        <div className="text-center  max-w-[1300px] mx-auto space-y-3">
          <h2 className="text-[14px] text-[#3D59FA]">Contact Us</h2>
          <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-[#051242]">
            Let Us Know About Your Project Idea!
          </h1>
          <p className="w-[60%] mx-auto text-[15px] text-[#7A7E9A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
            vel consequatur tempora atque blanditiis exercitationem incidunt,
            alias corporis quam assumenda dicta.
          </p>
        </div>
        <div className="grid md:grid-cols-2 py-4 md:w-[85%] mx-auto">
          <div className="flex items-center justify-center">
            <Image
              className="animate-updown"
              src="/contact.png"
              width={500}
              height={500}
              alt="contact"
            />
          </div>
          <div className="py-5">
            {successMessage && (
              <p className="text-green-500 text-center pb-3">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 text-center pb-3">{errorMessage}</p>
            )}
            <form
              className="w-[85%] mx-auto flex flex-col gap-5 bg-white p-5 rounded-md"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-[#F5FAFF] py-2 pl-3 focus:outline-[#3D59FA]"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="bg-[#F5FAFF] py-2 pl-3 focus:outline-[#3D59FA]"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="bg-[#F5FAFF] py-2 pl-3 focus:outline-[#3D59FA]"
                type="text"
                placeholder="Your Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <textarea
                className="bg-[#F5FAFF] py-2 pl-3 focus:outline-[#3D59FA]"
                name="message"
                cols="25"
                rows="8"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#3D59FA] rounded-md text-white w-fit mx-auto px-8 py-2"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
