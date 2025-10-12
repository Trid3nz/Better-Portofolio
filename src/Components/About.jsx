import React from "react";
import heroImage from "../assets/profile_img.jpg";
const About = () => {
  return (
    <div className="hero grid md:grid-cols-2 pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={heroImage} alt="Profile" className="w-10 rounded-md" />
          <q>Computer Science student, with passion to learn</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">
          Hi, I'm Tristan Nafi Agung Kurniawan
        </h1>
        <p className="text-base/loose mb-6 opacity-45">
          Hi! I'm Tristan, an undergraduate student passionate about Data
          Science, Machine Learning, and Web Development. I enjoy exploring
          software engineering while deepening my knowledge in data-driven
          projects. Over the past two years, I’ve built several data
          visualization dashboards using Streamlit and am currently learning
          React alongside modern frameworks like Tailwind CSS and Bootstrap. In
          my free time, I enjoy photography, gaming, and continuously learning
          new things.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="https://drive.google.com/file/d/1TjFEqSgNXOVAE3tiFZEnkLzRI8UhPOJq/view?usp=drive_link"
            className="bg-[#00B2A9] border-2 border-[#00B2A9] p-4 rounded-2xl text-white hover:bg-gray-200 hover:text-[#00B2A9] transition"
          >
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a
            href="#"
            className="bg-[#565F64] border-2 border-[#565F64] p-4 rounded-2xl text-white hover:bg-gray-200 hover:text-[#00B2A9] transition"
          >
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img
        src={heroImage}
        alt="Profile"
        className="w[500px] rounded-md md:ml-auto"
        loading="lazy"
      />
    </div>
  );
};

export default About;
