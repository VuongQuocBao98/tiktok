import React from "react";

export default function HeaderBar() {
  return (
    <div className="bg-[#1C1C1E] flex justify-center items-center py-3">
      <div className="container flex flex-col md:flex-row md:justify-between justify-center items-center gap-2">
        {/* SEARCH BAR  */}
        <div className="flex border border-black bg-[#09090A] rounded py-1 px-2 gap-2">
          <img alt="search" src="/images/icons/search.png" />
          <input
            placeholder="Search..."
            type="text"
            className="bg-transparent text-white pl-3 focus:outline-none"
          />
        </div>
        {/* SOCIAL  */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <a
            href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1&lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/icons/ins.png" alt="social" />
          </a>
          <a
            href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1&lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/icons/youtube.png" alt="social" />
          </a>
          <a
            href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1&lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/icons/fb.png" alt="social" />
          </a>
          <a
            href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1&lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/icons/tiktok.png" alt="social" />
          </a>
        </div>
      </div>
    </div>
  );
}
