import React from "react";
import { listTools } from "../data.js";
const Info = () => {
  return (
    <div className="tentang mt-32 py-10">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
        <p className="text-base/loose mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          illo dolorum ipsum rem odit sit similique et tempore, ab provident
          enim porro nesciunt nulla consequuntur suscipit modi? Tenetur maiores
          optio fugit at sint saepe laudantium, natus excepturi minima odit
          sapiente. Nulla quae corporis doloremque neque autem? Alias delectus
          magnam porro dolorum iusto. Earum voluptate tempora et minus facere,
          qui optio, error delectus expedita nisi ipsa dolores labore quasi
          atque repudiandae.
        </p>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4">Tools that I used</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 text-base/loose opacity-50">
          Here are some of the tools or framework that I use and currently
          learning
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-700 rounded-md hover:bg-zinc-800 group"
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zince-800 p-1 group-hover: bg-zinc-800"
                loading="lazy"
              />
              <div>
                <h4>{tool.nama}</h4>
                <p>{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
