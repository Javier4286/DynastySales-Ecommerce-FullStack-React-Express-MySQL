import { useState, useEffect } from "react";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { ScrollButton } from "./backToTop.styles";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton $show={showButton} onClick={scrollToTop}>
      <VerticalAlignTopOutlined style={{ fontSize: "20px" }} />
    </ScrollButton>
  );
};

export default BackToTop;
