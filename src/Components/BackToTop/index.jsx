import React, { useEffect, useState } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="btn"
      style={{
        borderRadius: "50%",
        backgroundColor: "#BB5A3A",
        padding: "8px",
        border: "2px solid #b86e07",
        position: "fixed",
        bottom: "10%",
        right: "3%",
        display: visible ? "inline" : "none",
        zIndex: "1000",
      }}
    >
      🔺
    </button>
  );
}

export default BackToTop;
