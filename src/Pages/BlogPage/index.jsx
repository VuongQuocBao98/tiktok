import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackToTop from "../../Components/BackToTop";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { POST_LIST } from "../../Constants/data/Posts";
import { convertSlug } from "../../utils";

export default function BlogPage() {
  const [column1, setcolumn1] = useState([]);
  const [column2, setcolumn2] = useState([]);
  const [column3, setcolumn3] = useState([]);
  const [limitPost, setlimitPost] = useState(3);

  useEffect(() => {
    const datas = POST_LIST.slice(0, limitPost);
    const check = Number(datas.length) % 3;
    // lay phan nguyen
    const Num = Math.floor(Number(datas.length) / 3);
    if (check === 1) {
      setcolumn1(POST_LIST.slice(0, Num + 1));
      setcolumn2(POST_LIST.slice(Num + 1, 2 * Num + 1));
      setcolumn3(POST_LIST.slice(2 * Num + 1, Number(datas.length)));
    } else if (check === 2) {
      setcolumn1(POST_LIST.slice(0, Num + 1));
      setcolumn2(POST_LIST.slice(Num + 1, 2 * Num + 2));
      setcolumn3(POST_LIST.slice(2 * Num + 2, Number(datas.length)));
    } else {
      setcolumn1(POST_LIST.slice(0, Num));
      setcolumn2(POST_LIST.slice(Num, 2 * Num));
      setcolumn3(POST_LIST.slice(2 * Num, Number(datas.length)));
    }
  }, [limitPost]);

  const handleIncreaseLimitPost = () => {
    setlimitPost(limitPost + 6);
  };

  return (
    <>
      <BackToTop />
      <Header />
      {/* BLOG CONTENT  */}
      <div className="container mx-auto flex flex-col">
        <div className="flex mx-auto mt-10 lg:mt-20">
          <h3 className="text-white font-bold text-[64px] font-Inf text-center">
            THE <span className="text-[#bb5a3a]">FEED</span>
          </h3>
        </div>
        <div className="grid grid-cols-6 gap-4 lg:gap-0 xl:px-24 lg:px-18 px-4 lg:mt-10 mt-10">
          {/* COLUMN 1  */}
          <div className="lg:col-span-2 col-span-6 mx-auto gap-4 flex flex-col">
            {/* POST  */}
            {column1.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col bg-white max-w-[290px]"
                >
                  <div>
                    <img src={item.img} alt="post" />
                  </div>
                  <div className="p-2 pb-6">
                    <p className="text-[20px] font-InfRegular mt-2 mb-3">
                      {item.time}
                    </p>
                    <p className="text-[28px] font-bold text-black">
                      <Link to={`/posts/${convertSlug(item.title)}-${item.id}`}>
                        {item.title}
                      </Link>
                    </p>
                    <p>{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* COLUMN 2  */}
          <div className="lg:col-span-2 col-span-6 mx-auto gap-4 flex flex-col">
            {column2.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col bg-white max-w-[290px]"
                >
                  <div>
                    <img src={item.img} alt="post" />
                  </div>
                  <div className="p-2 pb-6">
                    <p className="text-[20px] font-InfRegular mt-2 mb-3">
                      {item.time}
                    </p>
                    <p className="text-[28px] font-bold text-black">
                      <Link to={`/posts/${convertSlug(item.title)}-${item.id}`}>
                        {item.title}
                      </Link>
                    </p>
                    <p>{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* COLUMN 3  */}
          <div className="lg:col-span-2 col-span-6 mx-auto gap-4 flex flex-col">
            {column3.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col bg-white max-w-[290px]"
                >
                  <div>
                    <img src={item.img} alt="post" />
                  </div>
                  <div className="p-2 pb-6">
                    <p className="text-[20px] font-InfRegular mt-2 mb-3">
                      {item.time}
                    </p>
                    <p className="text-[28px] font-bold text-black">
                      <Link to={`/posts/${convertSlug(item.title)}-${item.id}`}>
                        {item.title}
                      </Link>
                    </p>
                    <p>{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {limitPost < Number(POST_LIST.length) && (
          <div
            className="flex justify-center text-white font-bold text-[32px] border-[5px] border-white mx-auto px-8 py-2 cursor-pointer bg-[#bb5a3a] lg:mt-20 mt-6"
            onClick={handleIncreaseLimitPost}
          >
            See More 6 Post ...
          </div>
        )}
      </div>
      <Contact />
      <Footer />
    </>
  );
}
