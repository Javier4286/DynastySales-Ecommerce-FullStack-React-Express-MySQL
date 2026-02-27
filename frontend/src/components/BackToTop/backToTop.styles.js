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
  background-color: #1a1a1a;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transform: ${({ $show }) => ($show ? "translateY(0)" : "translateY(20px)")};

  &:hover {
    background-color: #434343;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;
