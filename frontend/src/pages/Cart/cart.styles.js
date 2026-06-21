import styled from "styled-components";
import { Button, Empty } from "antd";

export const CartContainer = styled.section`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: "Inter", sans-serif;

  h1 {
    font-weight: 800;
    font-size: 2.5rem;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    margin-bottom: 30px;
    letter-spacing: -1px;
    transition: color 0.3s ease;
  }

  @media (max-width: 600px) {
    margin: 20px auto;
    h1 {
      font-size: 1.8rem;
      text-align: center;
    }
  }
`;

export const CartContentWrapper = styled.div`
  min-height: 200px;
`;

export const StyledEmpty = styled(Empty)`
  padding: 60px 0;

  .ant-empty-description {
    color: ${(props) =>
      props.$isDarkMode ? "#a6a6a6" : "rgba(0, 0, 0, 0.45)"} !important;
  }
`;

export const CartItem = styled.article`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: ${(props) => (props.$isDarkMode ? "#1f1f1f" : "white")};
  border-bottom: 1px solid
    ${(props) => (props.$isDarkMode ? "#2d2d2d" : "#eee")};
  margin-bottom: 10px;
  border-radius: 12px;
  transition: all 0.3s ease;

  .thumb {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }

  .info {
    h2 {
      font-size: 1.1rem;
      margin: 0;
      font-weight: 700;
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    }
    h3 {
      font-size: 0.9rem;
      margin: 0;
      color: ${(props) => (props.$isDarkMode ? "#a6a6a6" : "#888")};
    }
    .unit-price {
      font-size: 0.85rem;
      color: ${(props) => (props.$isDarkMode ? "#737373" : "#999")};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 20px;

    .subtotal {
      font-weight: 800;
      min-width: 80px;
      text-align: right;
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    }

    .ant-btn-text {
      color: ${(props) =>
        props.$isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)"};

      &:disabled {
        color: ${(props) =>
          props.$isDarkMode ? "#434343" : "rgba(0, 0, 0, 0.25)"} !important;
        background: transparent !important;
      }
    }

    .ant-btn-text.ant-btn-dangerous {
      color: #ff4d4f !important;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;

    .actions {
      flex-direction: column;
      gap: 10px;
      .subtotal {
        text-align: center;
      }
    }
  }
`;

export const QtySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => (props.$isDarkMode ? "#2c2c2c" : "#f0f0f0")};
  border-radius: 20px;
  padding: 4px;
  transition: background 0.3s ease;
`;

export const QtyValue = styled.span`
  font-weight: 700;
  padding: 0 10px;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#000000")};
`;

export const CartFooter = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: ${(props) => (props.$isDarkMode ? "#1f1f1f" : "#1a1a1a")};
  border: 1px solid
    ${(props) => (props.$isDarkMode ? "#2d2d2d" : "transparent")};
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  transition: all 0.3s ease;

  .total-section {
    span {
      color: ${(props) => (props.$isDarkMode ? "#a6a6a6" : "#888")};
      font-size: 0.9rem;
      text-transform: uppercase;
    }
    h3 {
      font-size: 2.2rem;
      margin: 0;
      color: #fff;
    }
  }

  .footer-btns {
    display: flex;
    gap: 15px;
  }
`;

export const CheckoutButton = styled.button`
  background: ${(props) => (props.$isDarkMode ? "#ffffff" : "#fff")};
  color: #1a1a1a;
  border: none;
  padding: 0 40px;
  height: 48px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.$isDarkMode ? "#e8e8e8" : "#e8e8e8")};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CancelButton = styled(Button)`
  font-weight: 600;
  height: 48px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$isDarkMode ? "#2c2c2c" : "#f5f5f5"} !important;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#595959")} !important;
  border: 1px solid ${(props) => (props.$isDarkMode ? "#434343" : "#d9d9d9")} !important;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? "#434343" : "#e8e8e8"} !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#262626")} !important;
    border-color: ${(props) =>
      props.$isDarkMode ? "#1890ff" : "#262626"} !important;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
