import styled from "styled-components";

const NotFoundWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 90px);
  width: 100%;
  background-color: ${(props) => (props.$isDarkMode ? "#121212" : "#f0f2f5")};
  padding: 20px;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  transition: background-color 0.3s ease;

  .ant-result {
    background: ${(props) => (props.$isDarkMode ? "#1e1e1e" : "#fdfaf6")};
    padding: 60px;
    border-radius: 20px;
    box-shadow: ${(props) =>
      props.$isDarkMode
        ? "0 8px 20px rgba(0, 0, 0, 0.4)"
        : "0 8px 20px rgba(0, 0, 0, 0.05)"};
    border: 1px solid ${(props) => (props.$isDarkMode ? "#333333" : "#eeebe5")};
    transition: all 0.3s ease;
    max-width: 500px;
    width: 100%;
  }

  .ant-result-title {
    font-size: 72px;
    font-weight: 800;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#34495e")} !important;
    line-height: 1;
  }

  .ant-result-subtitle {
    font-size: 1.2rem;
    color: ${(props) => (props.$isDarkMode ? "#b3b3b3" : "#666")} !important;
    margin-bottom: 24px;
  }

  .ant-btn-primary {
    height: 45px;
    padding: 0 30px;
    font-weight: 600;
    border-radius: 8px;
    background-color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "#34495e"} !important;
    color: ${(props) => (props.$isDarkMode ? "#121212" : "#ffffff")} !important;
    border: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.$isDarkMode ? "#e0e0e0" : "#1a1a1a"} !important;
      color: ${(props) =>
        props.$isDarkMode ? "#121212" : "#ffffff"} !important;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    .ant-result {
      padding: 40px 20px;
      box-shadow: none;
      border-radius: 12px;
    }

    .ant-result-title {
      font-size: 50px;
    }
  }
`;

export default NotFoundWrapper;
