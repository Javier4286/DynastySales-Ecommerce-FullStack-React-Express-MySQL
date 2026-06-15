import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
  font-family: "Inter", sans-serif;

  .search-main-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    max-width: 900px;
  }

  .search-input {
    flex: 1;
    max-width: 550px;
    border-radius: 20px !important;
    height: 40px;
    background-color: ${(props) =>
      props.$isDarkMode ? "#2c2c2c" : "#ffffff"} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;

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
    font-weight: 500;

    .ant-checkbox + span {
      color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "#34495e"} !important;
    }
  }

  .reset-btn {
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .filters-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 10px 20px;
    background: ${(props) =>
      props.$isDarkMode ? "rgba(44, 44, 44, 0.9)" : "rgba(255, 255, 255, 0.6)"};
    border: 1px solid
      ${(props) => (props.$isDarkMode ? "#434343" : "transparent")};
    border-radius: 15px;
    width: fit-content;
  }

  .number-input {
    width: 100px !important;
    border-radius: 8px !important;
    background-color: ${(props) =>
      props.$isDarkMode ? "#1f1f1f" : "#ffffff"} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;
    color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;

    input {
      color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;

      &::placeholder {
        color: ${(props) =>
          props.$isDarkMode ? "#a6a6a6" : "#bfbfbf"} !important;
      }
    }
  }

  .category-select {
    width: 180px !important;

    .ant-select-selector {
      background-color: ${(props) =>
        props.$isDarkMode ? "#1f1f1f" : "#ffffff"} !important;
      border-color: ${(props) =>
        props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;
      border-radius: 8px !important;
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

    &.ant-radio-button-wrapper-checked {
      background-color: #1890ff !important;
      border-color: #1890ff !important;
      color: #ffffff !important;
    }
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
      padding: 15px;
      gap: 12px;
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
      height: 38px !important;
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
      height: 38px;
    }

    .category-select {
      width: 100% !important;
      max-width: 250px;
    }
  }
`;
