import styled, { createGlobalStyle } from "styled-components";
import { Button, Card, Typography } from "antd";

const { Title } = Typography;

export const SelectDropdownStyles = createGlobalStyle`
  .custom-category-dropdown {
    background-color: ${(props) => (props.$isDarkMode ? "#1f1f1f" : "#ffffff")} !important;

    .ant-select-item {
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)")} !important;
    }

    .ant-select-item-option-content {
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)")} !important;
    }

    .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      background-color: ${(props) => (props.$isDarkMode ? "#2c2c2c" : "#f5f5f5")} !important;
    }

    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background-color: ${(props) => (props.$isDarkMode ? "#111111" : "#e6f7ff")} !important;
      font-weight: 600;
    }
  }
`;

export const AddProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 90px);
  width: 100%;
  background-color: ${(props) => (props.$isDarkMode ? "#141414" : "#f0f2f5")};
  padding: 40px 20px;
  box-sizing: border-box;
  transition: background-color 0.3s ease;

  @media (max-width: 600px) {
    padding: 20px 10px;
    align-items: flex-start;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 800px;
  box-shadow: ${(props) =>
    props.$isDarkMode
      ? "0 12px 40px rgba(0, 0, 0, 0.4)"
      : "0 12px 40px rgba(0, 0, 0, 0.08)"};
  border-radius: 20px;
  background-color: ${(props) => (props.$isDarkMode ? "#1f1f1f" : "#ffffff")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "#2d2d2d" : "#eee")};
  transition: all 0.3s ease;

  .ant-card-head {
    border-bottom: none;
    padding-top: 40px;
    text-align: center;
    background-color: transparent;
  }

  .ant-card-body {
    padding: 24px 40px 40px 40px;
    background-color: transparent;
  }

  .ant-form-item-label > label {
    font-weight: 700;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .ant-input,
  .ant-input-number-input {
    color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;

    &::placeholder {
      color: ${(props) =>
        props.$isDarkMode ? "#a6a6a6" : "#bfbfbf"} !important;
    }
  }

  .ant-input-number-handler-wrap {
    background-color: ${(props) =>
      props.$isDarkMode ? "#2c2c2c" : "#ffffff"} !important;
  }

  .ant-select-selector {
    background-color: ${(props) =>
      props.$isDarkMode ? "#2c2c2c" : "#ffffff"} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;
    border-radius: 8px !important;
  }

  .ant-select-selection-item {
    color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;
  }

  .ant-select-selection-placeholder {
    color: ${(props) => (props.$isDarkMode ? "#a6a6a6" : "#bfbfbf")} !important;
  }

  .ant-select-arrow {
    color: ${(props) =>
      props.$isDarkMode ? "#8c8c8c" : "rgba(0, 0, 0, 0.25)"};
  }

  @media (max-width: 600px) {
    border-radius: 12px;
    .ant-card-body {
      padding: 20px;
    }
  }
`;

export const CenteredTitle = styled(Title)`
  text-align: center !important;
  margin: 0 !important;
  font-weight: 800 !important;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  letter-spacing: -1px;
`;

export const FormActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-top: 35px;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
`;

export const StyledButton = styled(Button)`
  font-weight: 700;
  height: 52px;
  border-radius: 8px;
  font-size: 16px;
  background-color: #1a1a1a !important;
  border: none;
  color: #ffffff !important;
  transition: all 0.3s ease;
  flex: 1;
  width: 100%;

  &:hover {
    background-color: #404040 !important;
    transform: translateY(-2px);
  }
`;

export const CancelButton = styled(Button)`
  font-weight: 700;
  height: 52px;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${(props) => (props.$isDarkMode ? "#2c2c2c" : "#f5f5f5")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "#434343" : "#d9d9d9")};
  transition: all 0.3s ease;
  flex: 1;
  width: 100%;

  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? "#434343" : "#e8e8e8"} !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#000000")} !important;
    border-color: #1a1a1a !important;
  }
`;
