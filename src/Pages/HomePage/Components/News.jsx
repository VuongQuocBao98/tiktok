import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { POST_LIST } from "../../../Constants/data/Posts";
import { convertSlug } from "../../../utils";

export default function News() {
  const [postList, setpostList] = useState([]);
  useEffect(() => {
    setpostList(POST_LIST.slice(0, 2));
  }, []);

  return (
    <div className="flex container mx-auto mt-20 flex-col mb-5">
      <div className="flex justify-start w-[100%] mb-10">
        <h3 className="text-[#BB5A3A] font-bold text-[64px]">NEWS</h3>
      </div>
      <div className="lg:flex-row flex flex-col gap-20 justify-between">
        {/* NEWS LEFT CONTENT  */}
        <div className="flex flex-col gap-16">
          {postList.map((item) => {
            return (
              <div
                key={item.id}
                className="flex md:flex-row flex-col gap-3 bg-white max-w-[700px] md:mx-0 mx-3"
              >
                <div className="flex w-full min-w-[200px]">
                  <img
                    className="w-full md:w-auto"
                    src="/images/data/post1.png"
                    alt=""
                  />
                </div>
                <div className="p-3 flex flex-col justify-between">
                  <div>
                    <p className="lg:text-[24px] text-[20px] font-thin">
                      {item.time}
                    </p>
                    <h4 className="text-[28px] font-bold mt-4 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-[20px] font-thin">{item.des}</p>
                  </div>
                  <Link
                    to={`/posts/${convertSlug(item.title)}-${item.id}`}
                    className="mb-5 ml-auto bg-gradient-to-r hover:border-[4px] hover:border-black cursor-pointer from-[#BB5A3A] to-[#1C1C1E] px-5 py-2 mr-5"
                  >
                    <div className="">
                      <span className="font-bold text-white">See More</span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}

          <div className=" mx-auto bg-[#BB5A3A] px-8 py-2 border-[4px] border-white cursor-pointer hover:bg-[#1C1C1E]">
            <span className="font-bold text-white lg:text-[24px] text-[20px]">
              ALL POST
            </span>
          </div>
        </div>

        {/* NEWS RIGHT CONTENT */}
        <div className="bg-[#1C1C1E] flex flex-col items-center w-full mx-auto lg:mx-0 max-w-[370px] md:max-w-[550px]">
          <p className="text-[26px] font-bold text-center text-white mt-10">
            Follow Tôi Qua TikTok
          </p>
          <div className="flex md:gap-4 gap-1 mt-5">
            <div className="flex flex-col gap-3">
              <img className="w-auto" src="/images/home/rv1.png" alt="" />
              <img src="/images/home/rv2.png" alt="" />
              <img src="/images/home/rv3.png" alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <img src="/images/home/rv4.png" alt="" />
              <img src="/images/home/rv5.png" alt="" />
              <img src="/images/home/rv6.png" alt="" />
            </div>
          </div>

          {/* SOCIAL  */}
          <div className="flex gap-8 mt-6 mb-3">
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img
                src="/images/icons/ins-lg.png"
                className="cursor-pointer hover:scale-[1.1]"
                alt="social"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img
                src="/images/icons/fb-lg.png"
                className="cursor-pointer hover:scale-[1.1]"
                alt="social"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="/images/icons/youtube-lg.png"
                className="cursor-pointer hover:scale-[1.1]"
                alt="social"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="/images/icons/tiktok-lg.png"
                className="cursor-pointer hover:scale-[1.1]"
                alt="social"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
