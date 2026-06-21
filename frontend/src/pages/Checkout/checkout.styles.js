import styled, { createGlobalStyle } from "styled-components";
import {
  Card,
  Typography,
  Spin,
  Result,
  Input,
  Select,
  Divider,
  Space,
} from "antd";

const { Title } = Typography;

export const CheckoutGlobalStyles = createGlobalStyle`
  .checkout-select-dropdown {
    background-color: ${(props) => (props.$isDarkMode ? "#2c2c2c" : "#ffffff")} !important;
    border: 1px solid ${(props) => (props.$isDarkMode ? "#434343" : "#f0f0f0")} !important;
    border-radius: 8px !important;
    padding: 4px !important;

    .ant-select-item {
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)")} !important;
      border-radius: 4px !important;
      transition: background 0.2s ease;

      &-option-active {
        background-color: ${(props) => (props.$isDarkMode ? "#434343" : "#f5f5f5")} !important;
      }

      &-option-selected {
        background-color: ${(props) => (props.$isDarkMode ? "#1a1a1a" : "#e6f4ff")} !important;
        color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1677ff")} !important;
        font-weight: 600 !important;
      }
    }
  }

  .ant-message {
    .ant-message-notice-content {
      background-color: ${(props) => (props.$isDarkMode ? "#1f1f1f" : "#ffffff")} !important;
      border: 1px solid ${(props) => (props.$isDarkMode ? "#434343" : "#eee")} !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
      border-radius: 8px !important;
      padding: 10px 16px !important;
    }

    .ant-message-custom-content {
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      
      span:not(.anticon) {
        color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
        font-weight: 500 !important;
        font-size: 14px !important;
      }
    }
  }
`;

export const CheckoutContainer = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 20px;
  font-family: "Inter", sans-serif;
  min-height: calc(100vh - 350px);
  background-color: transparent;

  .checkout-grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 24px;
    align-items: start;
  }

  @media (max-width: 992px) {
    .checkout-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const StyledTitle = styled(Title)`
  font-weight: 800 !important;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  letter-spacing: -1px;
  margin-bottom: 40px !important;
`;

export const StyledCard = styled(Card)`
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.$isDarkMode
      ? "0 12px 40px rgba(0, 0, 0, 0.4)"
      : "0 12px 40px rgba(0, 0, 0, 0.06)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "#2d2d2d" : "#eee")};
  background-color: ${(props) => (props.$isDarkMode ? "#1f1f1f" : "#ffffff")};
  overflow: hidden;
  transition: all 0.3s ease;

  .ant-card-head {
    border-bottom: 1px solid
      ${(props) => (props.$isDarkMode ? "#2d2d2d" : "#f0f0f0")};
    padding: 16px 24px;
    background-color: transparent;

    .ant-card-head-title {
      font-weight: 700;
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
      text-transform: none;
    }
  }

  .ant-card-body {
    padding: 24px;
  }

  .ant-form-item-label > label {
    font-weight: 700;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    font-size: 0.85rem;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  .summary-text-muted {
    color: ${(props) => (props.$isDarkMode ? "#a6a6a6" : "#666")} !important;
  }

  .total-label {
    font-size: 18px;
    font-weight: 800 !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  }

  .total-amount {
    font-size: 22px;
    font-weight: 800 !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
  color: ${(props) => (props.$isDarkMode ? "#1a1a1a" : "#ffffff")};
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;

  &.go-shopping-btn {
    max-width: 250px;
    margin: 0 auto;
  }

  &:hover {
    background-color: ${(props) => (props.$isDarkMode ? "#e8e8e8" : "#404040")};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${(props) => (props.$isDarkMode ? "#434343" : "#d9d9d9")};
    color: ${(props) =>
      props.$isDarkMode ? "#8c8c8c" : "rgba(0, 0, 0, 0.25)"};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: transparent;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
  border: 2px solid ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? "rgba(255, 255, 255, 0.08)" : "#f5f5f5"};
  }
`;

export const SpinContainer = styled(Spin)`
  display: block;
  margin: 100px auto;

  &.inline-loader .ant-spin-dot-item {
    background-color: ${(props) => (props.$isDarkMode ? "#1a1a1a" : "#ffffff")};
  }
`;

export const CenteredResult = styled(Result)`
  padding: 60px 0;

  .ant-result-title {
    color: ${(props) =>
      props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.85)"} !important;
  }

  .empty-cart-icon {
    color: ${(props) => (props.$isDarkMode ? "#434343" : "#ccc")} !important;
    font-size: 72px;
  }
`;

export const StyledInput = styled(Input)`
  background-color: ${(props) =>
    props.$isDarkMode ? "#2c2c2c" : "#ffffff"} !important;
  border-color: ${(props) =>
    props.$isDarkMode ? "#434343" : "#d9d9d9"} !important;
  color: ${(props) =>
    props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;

  .input-prefix-icon {
    color: ${(props) => (props.$isDarkMode ? "#737373" : "#bfbfbf")} !important;
  }

  &::placeholder {
    color: ${(props) => (props.$isDarkMode ? "#737373" : "#bfbfbf")} !important;
  }
`;

export const StyledSelect = styled(Select)`
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

  .ant-select-arrow {
    color: ${(props) =>
      props.$isDarkMode ? "#8c8c8c" : "rgba(0, 0, 0, 0.25)"};
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 20px 0 !important;
  border-top-color: ${(props) =>
    props.$isDarkMode ? "#2d2d2d" : "#f0f0f0"} !important;
`;

export const StyledText = styled(Typography.Text)`
  color: ${(props) =>
    props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"} !important;
`;

export const StyledIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;

  .anticon {
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
  }
`;

export const ActionsSpace = styled(Space)`
  width: 100%;
  margin-top: 30px;
`;
