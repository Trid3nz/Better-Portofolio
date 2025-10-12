import React from "react";

const Contact = () => {
  return (
    <div className="Contact mt-32 sm:p-10 p-0" id="contact">
      <h1
        className="text-4xl font-bold mb-2 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Contact
      </h1>
      <p
        className="text-base/loose text-center mb-10 opacity-50"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Let's connect with me
      </p>

      <form
        action="https://formsubmit.co/tristan.nafiak2712@gmail.com"
        method="POST"
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama lengkap</label>
            <input
              className="border border-zinc-500 p-2 rounded-md"
              type="text"
              name="nama"
              placeholder="Insert your name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              className="border border-zinc-500 p-2 rounded-md"
              type="email"
              name="email"
              placeholder="Insert your email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Message</label>
            <textarea
              className="border border-zinc-500 p-2 rounded-md"
              name="Message"
              id="Message"
              cols="45"
              rows="7"
              placeholder="Message..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#00B2A9] hover:bg-[#00847d] text-center text-white font-semibold py-2 w-full cursor-pointer rounded-lg transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
