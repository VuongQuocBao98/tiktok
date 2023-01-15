import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBar from "../HeaderBar";

export default function Header() {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  return (
    <div className="">
      <HeaderBar />
      <div className="flex justify-center items-center mt-7">
        <div className="container flex justify-between items-center">
          <div className="flex items-center md:pl-none pl-3">
            <img src="/images/icons/logo.png" alt="logo" />
          </div>
          {/* DESTOP MENU  */}
          <div className="lg:flex hidden items-center gap-[150px]">
            <div className="flex gap-10">
              <NavLink to="/">
                <p className="text-white font-bold hover:text-[#C584F5] text-[20px] cursor-pointer">
                  Home
                </p>
              </NavLink>
              <NavLink to="/my-blog">
                <p className="text-white font-bold hover:text-[#C584F5] text-[20px] cursor-pointer">
                  My Blog
                </p>
              </NavLink>
              <NavLink to="/about">
                <p className="text-white font-bold hover:text-[#C584F5] text-[20px] cursor-pointer">
                  About
                </p>
              </NavLink>

              <p className="text-white font-bold hover:text-[#C584F5] text-[20px] cursor-pointer">
                Contact
              </p>
            </div>
            <div className="w-[100px] h-[40px] rounded-md border border-[#C584F5]"></div>
          </div>
          {/* MOBILE MENU  */}
          <div className="flex lg:hidden">
            {!isOpenMenu && (
              <img
                alt="menu"
                src="/images/icons/open.png"
                className="mr-3 cursor-pointer"
                onClick={() => setisOpenMenu(true)}
              />
            )}
          </div>
          {isOpenMenu && (
            <div className="fixed top-0 left-0 z-50 h-screen w-full bg-[#1C1C1E] flex items-center justify-center flex-col gap-8">
              <div className="flex items-center md:pl-none pl-3">
                <img src="/images/icons/logo.png" alt="logo" />
              </div>
              <div className="flex flex-col gap-10 items-center">
                <NavLink to="/">
                  <p className="text-white font-bold hover:text-[#C584F5] text-[20px] cursor-pointer">
                    Home
                  </p>
                </NavLink>
                <NavLink to="/my-blog">
                  <p className="text-white font-bold hover:text-[#C584F5] text-[20px] cursor-pointer">
                    My Blog
                  </p>
                </NavLink>

                <NavLink to="/about">
                  <p className="text-white font-bold hover:text-[#C584F5] text-[20px] cursor-pointer">
                    About
                  </p>
                </NavLink>
                <p className="text-white font-bold hover:text-[#C584F5] text-[20px] cursor-pointer">
                  Contact
                </p>
              </div>
              <div className="w-[100px] h-[40px] rounded-md border border-[#C584F5]"></div>
              <div className="absolute top-5 left-5">
                <img
                  alt="menu"
                  src="/images/icons/close.png"
                  className="mr-3 cursor-pointer"
                  onClick={() => setisOpenMenu(false)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
