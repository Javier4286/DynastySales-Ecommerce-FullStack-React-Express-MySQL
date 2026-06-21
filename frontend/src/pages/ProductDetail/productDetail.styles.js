import styled from "styled-components";
import { Button } from "antd";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 90px);
  width: 100%;
  padding: 40px 20px;
  background-color: ${(props) => (props.$isDarkMode ? "#121212" : "#f0f2f5")};
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  transition: background-color 0.3s ease;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  width: 100%;
`;

export const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1000px;
  width: 100%;
  background: ${(props) => (props.$isDarkMode ? "#1e1e1e" : "#fdfaf6")};
  padding: 40px;
  border-radius: 24px;
  box-shadow: ${(props) =>
    props.$isDarkMode
      ? "0 15px 35px rgba(0, 0, 0, 0.4)"
      : "0 15px 35px rgba(0, 0, 0, 0.1)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "#333333" : "#eeebe5")};
  position: relative;
  transition: all 0.3s ease;

  .image-container {
    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin: 0;
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
      line-height: 1.1;
    }

    h2 {
      font-size: 1.4rem;
      color: ${(props) => (props.$isDarkMode ? "#b3b3b3" : "#666")};
      font-weight: 500;
      margin: 10px 0 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .meta-info {
      font-size: 0.95rem;
      color: ${(props) => (props.$isDarkMode ? "#888888" : "#8c8c8c")};
      margin-bottom: 20px;
    }

    .description {
      font-size: 1.05rem;
      line-height: 1.6;
      color: ${(props) => (props.$isDarkMode ? "#cccccc" : "#444")};
      margin-bottom: 30px;
    }

    .price-tag {
      font-size: 2rem;
      font-weight: 700;
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
      margin-bottom: 10px;
    }

    .stock-status {
      margin-bottom: 30px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .actions {
      display: flex;
      gap: 15px;
      align-items: center;
      margin-top: auto;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    padding: 30px 20px;
    text-align: center;

    .image-container {
      max-width: 300px;
      margin: 0 auto;
    }

    .details {
      align-items: center;
    }

    .actions {
      justify-content: center;
    }
  }
`;

export const PrimaryButton = styled(Button)`
  font-weight: 600;
  height: 50px;
  border-radius: 20px;
  padding: 0 30px;
  border: none;
  background-color: ${(props) =>
    props.$isDarkMode ? "#ffffff" : "#1a1a1a"} !important;
  color: ${(props) => (props.$isDarkMode ? "#121212" : "#ffffff")} !important;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? "#e0e0e0" : "#404040"} !important;
    transform: translateY(-2px);
  }
`;

export const CancelButton = styled(Button)`
  font-weight: 600;
  height: 50px;
  border-radius: 20px;
  font-size: 16px;
  background-color: ${(props) => (props.$isDarkMode ? "#2a2a2a" : "#f5f5f5")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#595959")} !important;
  padding: 0 25px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "#444444" : "#d9d9d9")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? "#3a3a3a" : "#e8e8e8"} !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#262626")} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "#d9d9d9"} !important;
  }
`;
