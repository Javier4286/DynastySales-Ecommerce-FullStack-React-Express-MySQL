import styled from "styled-components";
import { Card, Typography } from "antd";

const { Title } = Typography;

export const CheckoutContainer = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 20px;
  font-family: "Inter", sans-serif;
  min-height: calc(100vh - 350px);

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
  color: #1a1a1a !important;
  letter-spacing: -1px;
`;

export const StyledCard = styled(Card)`
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #eee;
  overflow: hidden;

  .ant-card-head {
    border-bottom: 1px solid #f0f0f0;
    padding: 16px 24px;

    .ant-card-head-title {
      font-weight: 700;
      color: #1a1a1a;
      text-transform: none;
    }
  }

  .ant-card-body {
    padding: 24px;
  }

  .ant-form-item-label > label {
    font-weight: 700;
    color: #1a1a1a;
    font-size: 0.85rem;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  .total-label,
  .total-amount {
    font-weight: 800 !important;
    color: #1a1a1a !important;
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: #1a1a1a;
  color: white;
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

  &:hover {
    background-color: #404040;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #d9d9d9;
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
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
    background-color: #f5f5f5;
  }
`;
