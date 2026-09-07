import React from "react";
import heroImage from "../assets/profile_img.webp";
const About = () => {
  return (
    <div className="hero grid grid-cols-1 md:grid-cols-12 items-center pt-10 gap-8 lg:gap-12" id="home">
      <div className="md:col-span-7 lg:col-span-7 animate__animated animate__fadeInUp animate__delay-3s">
        <h1 className="text-4xl sm:text-5xl/tight font-bold mb-6">
          Hi, I'm Tristan Nafi Agung Kurniawan
        </h1>
        <p className="text-base/loose mb-6 opacity-70">
          Hi! I'm Tristan, an undergraduate student passionate about Data
          Science, Machine Learning, and Web Development. I enjoy exploring
          software engineering while deepening my knowledge in data-driven
          projects. Over the past two years, I’ve built several data
          visualization dashboards using Streamlit and am currently learning
          React alongside modern frameworks like Tailwind CSS and Bootstrap. In
          my free time, I enjoy photography, gaming, and continuously learning
          new things.
        </p>
        <div className="flex items-center sm:gap-4 gap-2 mb-6">
          <a
            href="https://drive.google.com/file/d/1TjFEqSgNXOVAE3tiFZEnkLzRI8UhPOJq/view?usp=drive_link"
            className="bg-[#00B2A9] border-2 border-[#00B2A9] p-4 rounded-2xl text-white hover:bg-gray-200 hover:text-[#00B2A9] transition font-medium"
          >
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a
            href="#project"
            className="bg-[#565F64] border-2 border-[#565F64] p-4 rounded-2xl text-white hover:bg-gray-200 hover:text-[#00B2A9] transition font-medium"
          >
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Trid3nz" className="hover:text-[#00B2A9] transition">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="https://www.instagram.com/nafi_2712" className="hover:text-[#00B2A9] transition">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/tristan-nafi-agung-kurniawan" className="hover:text-[#00B2A9] transition">
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
        </div>
      </div>
      <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end">
        <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] p-3.5 bg-zinc-800 border-2 border-zinc-700/80 rounded-3xl shadow-2xl shadow-black/50 hover:border-[#00B2A9]/50 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-4s flex flex-col items-center">
          <img
            src={heroImage}
            alt="Profile"
            className="w-full h-auto rounded-2xl object-cover"
            loading="lazy"
          />
          <div className="mt-3 text-center px-2 py-1">
            <q className="text-xs sm:text-sm text-gray-300 italic font-medium">
              Computer Science student, with passion to learn
            </q>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
