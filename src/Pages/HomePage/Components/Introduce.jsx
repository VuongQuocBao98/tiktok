import React from "react";

export default function Introduce() {
  return (
    <div className="container grid grid-cols-2 lg:px-4 px-2 gap-3 xl:gap-4 mx-auto lg:mt-20 mt-6 relative">
      <img
        alt="blur"
        src="/images/home/blurr.png"
        className="absolute lg:top-[-60%] lg:left-[-30%] top-5 w-auto z-[-1]"
      />
      {/* LEFT CONTENT  */}
      <div className="lg:col-span-1 col-span-2">
        <h2 className="text-white text-center lg:text-start text-[72px] font-bold max-w-[700px]">
          My Life. <span className="text-[#BB5A3A]">My Blog</span>
        </h2>
        <p className="text-white text-center lg:text-start font-thin text-[24px] mt-4">
          Hello My Name Is
        </p>
        <div className="text-[24px] text-center lg:text-start font-extrabold mt-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BB5A3A] to-violet-500">
            Follow Me !!!
          </span>
        </div>
        <div className="mt-4 grid gap-3 items-center justify-center grid-cols-6 xl:gap-10 max-w-[700px]">
          <img
            className="border-[#BB5A3A] border-[5px] col-span-3 mx-auto lg:mx-0 lg:col-span-2 lg:scale-[0.7] xl:scale-[1]"
            alt="thumbnail"
            src="/images/home/h1.png"
          />
          <img
            className="border-[#BB5A3A] border-[5px] col-span-3 mx-auto lg:mx-0 lg:col-span-2 lg:scale-[0.7] xl:scale-[1]"
            alt="thumbnail"
            src="/images/home/h2.png"
          />
          <img
            className="border-[#BB5A3A] border-[5px] col-span-6 mx-auto lg:mx-0 lg:col-span-2 lg:scale-[0.7] xl:scale-[1]"
            alt="thumbnail"
            src="/images/home/h3.png"
          />
        </div>

        <div className="xl:mt-4 mt-3 grid grid-cols-6 gap-3 lg:flex-row xl:gap-10 max-w-[700px] lg:ml-auto">
          <img
            className="border-[#BB5A3A] border-[5px] col-span-3 mx-auto lg:ml-auto lg:col-span-2  lg:scale-[0.7] xl:scale-[1]"
            alt="thumbnail"
            src="/images/home/h4.png"
          />
          <img
            className="border-[#BB5A3A] border-[5px] col-span-3 mx-auto lg:ml-auto lg:col-span-2 lg:scale-[0.7] xl:scale-[1]"
            alt="thumbnail"
            src="/images/home/h5.png"
          />
          <img
            className="border-[#BB5A3A] border-[5px] col-span-6 mx-auto lg:ml-auto lg:col-span-2 lg:scale-[0.7] xl:scale-[1]"
            alt="thumbnail"
            src="/images/home/h6.png"
          />
        </div>
      </div>
      {/* RIGHT CONTENT  */}
      <div className="lg:col-span-1 flex justify-center lg:justify-end col-span-2">
        <img src="/images/home/avatar.png" alt="avatar" />
      </div>
    </div>
  );
}
