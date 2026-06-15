import styled from "styled-components";

export const ScrollButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? "#ffffff" : "#1a1a1a"};
  color: ${({ $isDarkMode }) => ($isDarkMode ? "#121212" : "#ffffff")};
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  box-shadow: ${({ $isDarkMode }) =>
    $isDarkMode
      ? "0 4px 15px rgba(0, 0, 0, 0.4)"
      : "0 4px 10px rgba(0, 0, 0, 0.2)"};
  transition: all 0.3s ease;
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transform: ${({ $show }) => ($show ? "translateY(0)" : "translateY(20px)")};

  &:hover {
    background-color: ${({ $isDarkMode }) =>
      $isDarkMode ? "#e0e0e0" : "#434343"};
    transform: ${({ $show }) =>
      $show ? "translateY(-5px) scale(1.1)" : "translateY(20px)"};
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;
