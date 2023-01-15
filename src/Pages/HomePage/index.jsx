import React from "react";
import BackToTop from "../../Components/BackToTop";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Introduce from "./Components/Introduce";
import News from "./Components/News";

export default function HomePage() {
  return (
    <>
      <BackToTop />
      <Header />
      <Introduce />
      <News />
      <Contact />
      <Footer />
    </>
  );
}
