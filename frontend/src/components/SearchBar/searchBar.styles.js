import styled, { createGlobalStyle } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

export const GlobalDropdownStyles = createGlobalStyle`
  .dynasty-select-popup {
    background-color: ${(props) => (props.$isDarkMode ? "#1f1f1f" : "#ffffff")} !important;
    border: 1px solid ${(props) => (props.$isDarkMode ? "#434343" : "#d9d9d9")} !important;
    
    .ant-select-item {
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)")} !important;
      background-color: transparent !important;
      
      &-active {
        background-color: ${(props) => (props.$isDarkMode ? "#2c2c2c" : "#f5f5f5")} !important;
      }
      
      &-selected {
        background-color: #1890ff !important;
        color: #ffffff !important;
      }
    }
  }

  ${(props) =>
    props.$isDarkMode &&
    `
    .ant-input-number-input::placeholder {
      color: #a6a6a6 !important;
      -webkit-text-fill-color: #a6a6a6 !important;
      opacity: 1 !important;
    }
    .ant-input-number-input-focused::placeholder {
      color: #a6a6a6 !important;
      -webkit-text-fill-color: #a6a6a6 !important;
    }
  `}
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 14px;
  font-family: "Inter", sans-serif;

  .search-main-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 900px;
  }

  .search-input {
    flex: 1;
    max-width: 550px;
    border-radius: 20px !important;
    height: 42px;
    background-color: ${(props) =>
      props.$isDarkMode ? "#2c2c2c" : "#ffffff"} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;
    box-shadow: ${(props) =>
      props.$isDarkMode
        ? "0 2px 8px rgba(0,0,0,0.4)"
        : "0 2px 8px rgba(0,0,0,0.05)"} !important;

    input {
      background-color: transparent !important;
      color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;

      &::placeholder {
        color: ${(props) =>
          props.$isDarkMode ? "#a6a6a6" : "#bfbfbf"} !important;
        opacity: 1 !important;
      }
    }

    .ant-input-clear-icon {
      color: ${(props) =>
        props.$isDarkMode ? "#8c8c8c" : "rgba(0, 0, 0, 0.25)"} !important;
    }
  }

  .filter-controls {
    display: flex;
    align-items: center;
  }

  .filter-checkbox {
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#34495e")} !important;
    font-weight: 600;
    font-size: 0.95rem;

    .ant-checkbox + span {
      color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "#34495e"} !important;
    }
  }

  .filters-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 12px 24px;
    background: ${(props) => (props.$isDarkMode ? "#262626" : "#e6f7ff")};
    border: 1px solid ${(props) => (props.$isDarkMode ? "#434343" : "#bae7ff")};
    border-radius: 30px;
    width: fit-content;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .price-filters-space {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .number-input {
    width: 105px !important;
    border-radius: 8px !important;
    height: 38px;
    background-color: ${(props) =>
      props.$isDarkMode ? "#1f1f1f" : "#ffffff"} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;

    .ant-input-number-input {
      color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;
      height: 36px;

      &::placeholder {
        color: ${(props) =>
          props.$isDarkMode ? "#a6a6a6" : "#bfbfbf"} !important;
        -webkit-text-fill-color: ${(props) =>
          props.$isDarkMode ? "#a6a6a6" : "#bfbfbf"} !important;
        opacity: 1 !important;
      }
    }
  }

  .category-select {
    width: 190px !important;
    height: 38px;

    .ant-select-selector {
      background-color: ${(props) =>
        props.$isDarkMode ? "#1f1f1f" : "#ffffff"} !important;
      border-color: ${(props) =>
        props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;
      border-radius: 8px !important;
      height: 38px !important;
      display: flex;
      align-items: center;
    }

    .ant-select-selection-item {
      color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;
    }

    .ant-select-selection-placeholder {
      color: ${(props) =>
        props.$isDarkMode ? "#a6a6a6" : "#bfbfbf"} !important;
    }

    .ant-select-arrow {
      color: ${(props) => (props.$isDarkMode ? "#8c8c8c" : "#bfbfbf")};
    }

    .ant-select-clear {
      background: ${(props) =>
        props.$isDarkMode ? "#1f1f1f" : "#ffffff"} !important;
      color: ${(props) =>
        props.$isDarkMode ? "#8c8c8c" : "rgba(0, 0, 0, 0.25)"} !important;
    }
  }

  .ant-radio-button-wrapper {
    background-color: ${(props) =>
      props.$isDarkMode ? "#1f1f1f" : "#ffffff"} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;
    color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;
    height: 38px;
    line-height: 36px;

    &.ant-radio-button-wrapper-checked {
      background-color: #1890ff !important;
      border-color: #1890ff !important;
      color: #ffffff !important;
    }
  }

  .reset-btn {
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    height: 38px;
    border-radius: 20px;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    .search-main-row {
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }

    .search-input {
      width: 100% !important;
      max-width: 100%;
    }

    .filter-controls {
      width: 100%;
      justify-content: center;
      padding: 4px 0;
    }

    .filters-row {
      flex-direction: column;
      width: 100%;
      padding: 16px;
      gap: 14px;
      border-radius: 20px;
    }

    .price-filters-space {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .number-input {
      width: 100% !important;
      max-width: 250px;
      height: 40px !important;
    }

    .ant-radio-group {
      display: flex !important;
      justify-content: center;
      width: 100%;
      max-width: 250px;
    }

    .ant-radio-button-wrapper {
      flex: 1;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
    }

    .category-select {
      width: 100% !important;
      max-width: 250px;
      height: 40px !important;

      .ant-select-selector {
        height: 40px !important;
      }
    }

    .reset-btn {
      width: 100%;
      max-width: 250px;
      justify-content: center;
      height: 40px;
    }
  }
`;

export const StyledSearchIcon = styled(SearchOutlined)`
  color: ${(props) => (props.$isDarkMode ? "#8c8c8c" : "#bfbfbf")};
`;
