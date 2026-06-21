import styled from "styled-components";
import { Button, Card, Typography } from "antd";

const { Title } = Typography;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 90px);
  width: 100%;
  background-color: ${(props) => (props.$isDarkMode ? "#121212" : "#f0f2f5")};
  padding: 40px 20px;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  transition: background-color 0.3s ease;

  @media (max-width: 600px) {
    padding: 20px 10px;
    align-items: flex-start;
  }
`;

export const CenteredTitle = styled(Title)`
  text-align: center !important;
  margin: 0 !important;
  font-weight: 800 !important;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  letter-spacing: -1px;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 700px;
  box-shadow: ${(props) =>
    props.$isDarkMode
      ? "0 12px 40px rgba(0, 0, 0, 0.5)"
      : "0 12px 40px rgba(0, 0, 0, 0.08)"};
  border-radius: 20px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "#333333" : "#eee")};
  background-color: ${(props) => (props.$isDarkMode ? "#1e1e1e" : "#ffffff")};
  transition: all 0.3s ease;

  .ant-card-head {
    border-bottom: none;
    padding-top: 40px;
    background-color: transparent;
  }

  .ant-card-body {
    padding: 20px 40px 40px 40px;
  }

  .ant-form-item-label > label {
    font-weight: 700;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .ant-input-affix-wrapper {
    display: inline-flex;
    align-items: center;
  }

  .ant-input-affix-wrapper,
  .ant-input {
    background-color: ${(props) =>
      props.$isDarkMode ? "#2a2a2a" : "#ffffff"} !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
    border-radius: 8px;
    padding: 12px 16px;
    border-color: ${(props) => (props.$isDarkMode ? "#444444" : "#d9d9d9")};
    box-sizing: border-box;

    input {
      background-color: transparent !important;
      color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "#1a1a1a"} !important;

      &::placeholder {
        color: ${(props) =>
          props.$isDarkMode ? "#aaaaaa" : "#bfbfbf"} !important;
      }
    }

    &:hover,
    &:focus,
    &-focused {
      border-color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "#1a1a1a"} !important;
      box-shadow: none !important;
    }

    &::placeholder {
      color: ${(props) =>
        props.$isDarkMode ? "#aaaaaa" : "#bfbfbf"} !important;
    }

    .ant-input-password-icon {
      color: ${(props) =>
        props.$isDarkMode ? "#aaaaaa" : "#888888"} !important;

      &:hover {
        color: ${(props) =>
          props.$isDarkMode ? "#ffffff" : "#1a1a1a"} !important;
      }
    }
  }

  .ant-form-item-explain-error {
    color: #ff4d4f;
    margin-top: 4px;
  }

  @media (max-width: 600px) {
    border-radius: 12px;
    .ant-card-body {
      padding: 20px;
    }
  }
`;

export const StyleButton = styled(Button)`
  font-weight: 700;
  height: 48px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$isDarkMode ? "#ffffff" : "#1a1a1a"} !important;
  color: ${(props) => (props.$isDarkMode ? "#121212" : "#ffffff")} !important;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? "#e0e0e0" : "#404040"} !important;
    transform: translateY(-2px);
  }
`;

export const SecundaryButton = styled(Button)`
  font-weight: 700;
  height: 48px;
  border-radius: 8px;
  background-color: ${(props) => (props.$isDarkMode ? "#2a2a2a" : "#f5f5f5")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  border: 1px solid ${(props) => (props.$isDarkMode ? "#444444" : "#d9d9d9")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? "#3a3a3a" : "#e8e8e8"} !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#000000")} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "#1a1a1a"} !important;
  }
`;
