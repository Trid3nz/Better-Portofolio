import React from "react";
import { listProyek } from "../data";

const Project = () => {
  return (
    <div className="proyek mt-32 py-10" id="project">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Project
      </h1>
      <p
        className="text-base/loose text-center opacity-50"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Here are some project that I have made
      </p>

      <div className="Project-Box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="flex flex-col bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={proyek.dad}
            data-aos-once="true"
          >
            <img
              src={proyek.gambar}
              alt={proyek.nama}
              loading="lazy"
              className="w-full h-52 object-cover"
            />

            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-3">
                  {proyek.nama}
                </h1>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {proyek.desk}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-sm py-1 px-3 border border-zinc-600 bg-zinc-900 rounded-full font-medium text-zinc-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={proyek.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00B2A9] hover:bg-[#00847d] text-center text-white font-semibold py-2 rounded-lg transition-colors"
              >
                See Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
