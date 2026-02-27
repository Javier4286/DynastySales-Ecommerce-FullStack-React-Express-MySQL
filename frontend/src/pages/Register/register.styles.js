import styled from "styled-components";
import { Button, Card, Typography } from "antd";

const { Title } = Typography;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 90px);
  width: 100%;
  background-color: #f0f2f5;
  padding: 40px 20px;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;

  @media (max-width: 600px) {
    padding: 20px 10px;
    align-items: flex-start;
  }
`;

export const CenteredTitle = styled(Title)`
  text-align: center !important;
  margin: 0 !important;
  font-weight: 800 !important;
  color: #1a1a1a !important;
  letter-spacing: -1px;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 700px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  border: 1px solid #eee;

  .ant-card-head {
    border-bottom: none;
    padding-top: 40px;
  }

  .ant-card-body {
    padding: 20px 40px 40px 40px;
  }

  .ant-form-item-label > label {
    font-weight: 700;
    color: #1a1a1a;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .ant-input,
  .ant-input-password {
    border-radius: 8px;
    height: 45px;
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
  background-color: #1a1a1a !important;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #404040 !important;
    transform: translateY(-2px);
  }
`;

export const SecundaryButton = styled(Button)`
  font-weight: 700;
  height: 48px;
  border-radius: 8px;
  background-color: #f5f5f5;
  color: #1a1a1a;
  border: 1px solid #d9d9d9;

  &:hover {
    background-color: #e8e8e8 !important;
    color: #000 !important;
    border-color: #1a1a1a !important;
  }
`;
