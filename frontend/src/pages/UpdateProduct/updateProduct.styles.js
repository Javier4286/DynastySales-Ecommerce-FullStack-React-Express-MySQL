import styled, { createGlobalStyle } from "styled-components";

export const UpdateContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
  padding: 0 20px;
  font-family: "Inter", sans-serif;
  box-sizing: border-box;

  .loading-container {
    display: flex;
    justify-content: center;
    padding: 100px 0;
  }

  .update-card {
    border-radius: 20px;
    box-shadow: ${(props) =>
      props.$isDarkMode
        ? "0 12px 40px rgba(0, 0, 0, 0.5)"
        : "0 12px 40px rgba(0, 0, 0, 0.05)"};
    background-color: ${(props) => (props.$isDarkMode ? "#1e1e1e" : "#ffffff")};
    border: 1px solid ${(props) => (props.$isDarkMode ? "#333333" : "#eeeeee")};
    transition: all 0.3s ease;
  }

  .update-title {
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
    font-weight: 800 !important;
    letter-spacing: -0.5px;
    margin-bottom: 24px !important;
  }

  .ant-form-item-label > label {
    font-weight: 700;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    font-size: 0.9rem;
  }

  .ant-input,
  .ant-select-selector,
  .ant-input-number,
  .ant-input-textarea textarea {
    background-color: ${(props) =>
      props.$isDarkMode ? "#2a2a2a" : "#ffffff"} !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
    border: 1px solid ${(props) => (props.$isDarkMode ? "#444444" : "#d9d9d9")} !important;
    border-radius: 8px !important;
  }

  .ant-select-selection-item {
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  }

  .ant-input-number-input,
  .ant-input-number-input-wrap input,
  .ant-input,
  textarea {
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
    background: transparent !important;
  }

  .ant-input-number-handler-wrap {
    opacity: 1 !important;
    background-color: ${(props) =>
      props.$isDarkMode ? "#2a2a2a" : "#ffffff"} !important;
    border-left: 1px solid
      ${(props) => (props.$isDarkMode ? "#444444" : "#d9d9d9")} !important;
  }

  .ant-input-number-handler {
    background-color: ${(props) =>
      props.$isDarkMode ? "#2a2a2a" : "#ffffff"} !important;
  }

  .ant-input-number-handler-up-inner,
  .ant-input-number-handler-down-inner,
  .ant-select-arrow {
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  }

  .full-width {
    width: 100% !important;
  }

  .cancel-btn {
    font-weight: 700;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => (props.$isDarkMode ? "#2a2a2a" : "#f5f5f5")};
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    border: 1px solid ${(props) => (props.$isDarkMode ? "#444444" : "#d9d9d9")};
  }

  .save-btn {
    font-weight: 700;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "#1a1a1a"} !important;
    color: ${(props) => (props.$isDarkMode ? "#121212" : "#ffffff")} !important;
    border: none;
  }

  .actions-space {
    width: 100%;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 8px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    margin: 1rem auto;
    padding: 0 12px;

    .form-grid,
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .actions-space {
      flex-direction: column;
      gap: 10px !important;
    }

    .cancel-btn,
    .save-btn {
      width: 100%;
    }
  }
`;

export const SelectDropdownStyles = createGlobalStyle`
  .category-dropdown-dark {
    background-color: #2a2a2a !important;
    border: 1px solid #444444 !important;
  }

  .category-dropdown-dark .ant-select-item {
    color: #ffffff !important;
    background-color: #2a2a2a !important;
  }

  .category-dropdown-dark .ant-select-item-option-content {
    color: #ffffff !important;
  }

  .category-dropdown-dark .ant-select-item-option-active {
    background-color: #3a3a3a !important;
  }

  .category-dropdown-dark .ant-select-item-option-selected {
    background-color: #4a4a4a !important;
  }

  .category-dropdown-light .ant-select-item {
    color: #1a1a1a !important;
    background-color: #ffffff !important;
  }

  .category-dropdown-light .ant-select-item-option-content {
    color: #1a1a1a !important;
  }

  .category-dropdown-light .ant-select-item-option-active {
    background-color: #f5f5f5 !important;
  }

  .category-dropdown-light .ant-select-item-option-selected {
    background-color: #e6f4ff !important;
  }
`;
