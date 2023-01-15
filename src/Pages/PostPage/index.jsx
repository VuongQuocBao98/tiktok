import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackToTop from "../../Components/BackToTop";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { POST_LIST } from "../../Constants/data/Posts";
import { convertSlug } from "../../utils";

export default function PostPage() {
  const params = useParams();
  const [selectedPost, setSelectedPost] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const postInfo = POST_LIST.filter(
      (el) => `${convertSlug(el.title)}-${el.id}` === String(params.postid)
    );
    setSelectedPost(postInfo[0]);
  }, [params]);

  return (
    <>
      <BackToTop />
      <Header />
      {/* POST DETAIL  */}
      <div className="container flex mx-auto mt-12">
        <div dangerouslySetInnerHTML={{ __html: selectedPost?.content }} />
      </div>

      <div className="container flex gap-10 mx-auto lg:flex-row flex-col mt-10 mb-14">
        {POST_LIST.slice(0, 2).map((item) => {
          return (
            <div
              key={item.id}
              className="flex md:flex-row flex-col gap-3 bg-white max-w-[700px] md:mx-0 mx-3"
            >
              <div className="flex w-full min-w-[200px]">
                <img className="w-full md:w-auto" src={item.img} alt="" />
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
                  <div>
                    <span className="font-bold text-white">See More</span>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
