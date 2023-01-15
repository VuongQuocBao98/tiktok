import React from "react";

export default function Contact() {
  return (
    <div className="container flex flex-col text-center justify-center mx-auto mt-[80px] bg-[#CE6947] pb-10 mb-20">
      <p className="md:text-[48px] text-[36px] lg:text-[64px] font-bold text-white mt-5">
        CONTACT WITH ME
      </p>
      <div className="flex lg:flex-row items-center max-w-[900px] justify-between w-full mx-auto gap-4 mt-4 px-4">
        <div className="flex flex-col items-start">
          <span className="text-white text-[24px] lg:text-[28px]">
            First Name
          </span>
          <input
            type="text"
            name="fname"
            className=" flex px-3 w-[100%] py-2 bg-transparent focus:outline-none border-b-[2px] border-white text-white mt-[-15px] focus:mt-1 lg:min-w-[300px]"
            placeholder=""
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-white text-[24px] lg:text-[28px]">
            Last Name
          </span>
          <input
            type="text"
            name="lname"
            className="flex px-3 w-[100%] py-2 bg-transparent focus:outline-none border-b-[2px] border-white text-white mt-[-15px] focus:mt-1 lg:min-w-[300px]"
            placeholder=""
          />
        </div>
      </div>
      <div className="flex lg:flex-row items-center max-w-[900px] justify-between w-full mx-auto gap-4 px-4 lg:mt-10 mt-4">
        <div className="flex flex-col items-start">
          <span className="text-white text-[24px] lg:text-[28px]">
            Email <span className="text-red-600">*</span>
          </span>
          <input
            type="email"
            name="email"
            className=" flex px-3 w-[100%] py-2 bg-transparent focus:outline-none border-b-[2px] border-white text-white mt-[-15px] focus:mt-1 lg:min-w-[300px]"
            placeholder=""
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-white text-[24px] lg:text-[28px] flex">
            <span className="hidden md:flex mr-2">Leave us </span> Message ...
          </span>
          <input
            type="text"
            name="message"
            className="flex px-3 w-[100%] py-2 bg-transparent focus:outline-none border-b-[2px] border-white text-white mt-[-15px] focus:mt-1 lg:min-w-[300px]"
            placeholder=""
          />
        </div>
      </div>

      <div className="md:text-[36px] bg-black flex w-fit px-10 mx-auto text-[28px] font-bold text-white mt-16 cursor-pointer">
        SEND EMAIL
      </div>
    </div>
  );
}
