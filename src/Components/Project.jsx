import React from "react";
import { listProyek } from "../data";

const Project = () => {
  return (
    <div className="proyek mt-32 py-10">
      <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
      <p className="text-base/loose text-center opacity-50">
        Here are some project that I have made
      </p>

      <div className="Project-Box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ggap-4">
        {listProyek.map((proyek) => (
          <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
            <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4 ">{proyek.nama}</h1>
              <p>{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-500 bg-zinc-800 rounded-md font-semibold"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="bg-[#00B2A9] p-3 rounded-lg block border-zinc-600 hover:bg-[#00847d]"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
