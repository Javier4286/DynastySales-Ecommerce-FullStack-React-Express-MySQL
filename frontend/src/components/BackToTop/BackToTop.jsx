import { useState, useEffect } from "react";
import useThemeStore from "../../store/useThemeStore";
import { ScrollButton, StyledIcon } from "./backToTop.styles";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const { isDarkMode } = useThemeStore();

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
    <ScrollButton
      $show={showButton}
      $isDarkMode={isDarkMode}
      onClick={scrollToTop}
    >
      <StyledIcon />
    </ScrollButton>
  );
};

export default BackToTop;
