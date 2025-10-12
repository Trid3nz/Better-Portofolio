import React from "react";

const footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 justify-between md:gap-0 items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Trid3nz">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/nafi_2712">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/tristan-nafi-agung-kurniawan">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default footer;
