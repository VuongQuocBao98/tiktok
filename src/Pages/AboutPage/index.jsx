import React from "react";
import BackToTop from "../../Components/BackToTop";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function AboutPage() {
  return (
    <>
      <BackToTop />
      <Header />
      {/* ABOUT CONTENT  */}
      <div className="container flex justify-center lg:mt-28 mt-12 lg:mb-28 mb-14 mx-auto">
        <div className="flex justify-start max-w-[975px]">
          <div className="bg-[#bb5a3a] lg:px-16 lg:py-10 py-6 px-8 max-w-[740px] grid grid-cols-2 relative lg:mx-0 mx-4">
            <div className="lg:col-span-1 col-span-2">
              <p className="font-bold text-[64px] lg:text-start text-center">
                About <span className="text-white">Me</span>
              </p>
              <p className="max-w-[360px] lg:text-start text-center mb-2 mx-auto text-[20px]">
                &nbsp; &nbsp; I'm a paragraph. Click here to add your own text
                and edit me. It’s easy. Just click “Edit Text” or double click
                me to add your own content and make changes to the font.{" "}
              </p>
              <p className="max-w-[360px]  mb-2 mx-auto text-[20px]">
                &nbsp; &nbsp; Feel free to drag and drop me anywhere you like on
                your page. I’m a great place for you to tell a story and let
                your users know a little more about you
              </p>
            </div>
            <div className="lg:absolute col-span-2 relative lg:top-[20%] mt-3 lg:right-[-40%]">
              <img
                className="lg:w-[70%] w-[100%]"
                src="/images/about/about.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
