import React from "react";

export default function Page() {
  return (
    <div className="h-full min-h-screen bg-gradient-to-r from-[#051242] via-[#1d3557] to-[#3b5998] text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#47a3ff]">
        About Us
      </h1>
      <div className="lg:max-w-[70%] mx-auto">
        <p className="text-lg mb-4 text-center text-[#f0f0f0] leading-relaxed">
          Pentatonics Technologies is a legally registered company in Ethiopia
          working on the growth of Ethiopian music by connecting music
          instrument teachers with students. Founded in 2024, we aim to preserve
          and promote Ethiopia's rich musical heritage while providing an
          accessible platform for learners and teachers alike. In addition to
          our work in music, we also specialize in providing high-quality
          website development services for businesses, helping them establish a
          strong online presence.
        </p>
        <p className="text-lg text-center text-[#f0f0f0] leading-relaxed">
          Our startup connects passionate music instrument learners with expert
          music instrument teachers, offering affordable and high-quality
          courses. By leveraging strategic partnerships and a cost-effective
          pricing model, we aim to make the rich cultural heritage of Ethiopian
          music accessible to a global audience. Alongside this, our tech
          solutions, including custom website development, help businesses grow
          by providing them with user-friendly and effective digital platforms.
        </p>
      </div>
      <div className="mt-8 text-center animate-pulse">
        <p className="text-lg font-semibold text-[#00ffff]">
          Bringing Ethiopian music and tech solutions to the world, one step at a time.
        </p>
      </div>
    </div>
  );
}
