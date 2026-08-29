import React, { useState } from "react";
import { listExperience } from "../data";

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="experience mt-32 py-10" id="experience">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Experience
      </h1>
      <p
        className="text-base/loose text-center opacity-50 mb-14"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Here is my work and organizational experience
      </p>

      <div className="flex flex-col gap-8">
        {listExperience.map((exp) => (
          <div
            key={exp.id}
            className="bg-zinc-800 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-zinc-700/50 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay={exp.dad || "200"}
            data-aos-once="true"
          >
            {/* Header & Subtitle */}
            <div className="mb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                {/* Tempat kerja / nama pengalaman -> Header Lebih Besar */}
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {exp.tempatKerja || exp.nama}
                </h2>
                {exp.posisi && (
                  <span className="text-xs md:text-sm font-semibold bg-[#00B2A9]/10 text-[#00B2A9] px-3 py-1 rounded-full border border-[#00B2A9]/30">
                    {exp.posisi}
                  </span>
                )}
              </div>

              {/* Tahun -> Subtitle */}
              <div className="text-zinc-400 font-medium text-sm md:text-base mt-1">
                <span>{exp.tahun}</span>
              </div>
            </div>

            {/* Description -> Bulletin list */}
            <div className="mb-6">
              {Array.isArray(exp.deskripsi || exp.description) ? (
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  {(exp.deskripsi || exp.description).map((item, idx) => (
                    <li key={idx} className="text-base leading-relaxed">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-zinc-300 leading-relaxed">
                  {exp.deskripsi || exp.description}
                </p>
              )}
            </div>

            {/* Gambar -> 1 hingga 4 images */}
            {exp.gambar && exp.gambar.length > 0 && (
              <div className="mt-2 pt-4 border-t border-zinc-700/60">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                  Documentation ({exp.gambar.length})
                </h4>
                <div
                  className={`grid gap-4 ${
                    exp.gambar.length === 1
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : exp.gambar.length === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : exp.gambar.length === 3
                      ? "grid-cols-1 sm:grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-4"
                  }`}
                >
                  {exp.gambar.slice(0, 4).map((imgUrl, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="group relative overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 aspect-video cursor-pointer"
                      onClick={() => setSelectedImage(imgUrl)}
                    >
                      <img
                        src={imgUrl}
                        alt={`${exp.tempatKerja || exp.nama} ${imgIdx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#00B2A9] text-3xl font-bold transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-zinc-700"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
