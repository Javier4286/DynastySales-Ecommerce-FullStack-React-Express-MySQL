import styled from "styled-components";
import { Button } from "antd";

export const CartContainer = styled.section`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: "Inter", sans-serif;

  h1 {
    font-weight: 800;
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 30px;
    letter-spacing: -1px;
  }

  @media (max-width: 600px) {
    margin: 20px auto;
    h1 {
      font-size: 1.8rem;
      text-align: center;
    }
  }
`;

export const CartItem = styled.article`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: white;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  border-radius: 12px;

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
    }
    h3 {
      font-size: 0.9rem;
      margin: 0;
      color: #888;
    }
    .unit-price {
      font-size: 0.85rem;
      color: #999;
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

export const CartFooter = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: #1a1a1a;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  .total-section {
    span {
      color: #888;
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

  .checkout-btn {
    background: #fff;
    color: #1a1a1a;
    border: none;
    padding: 0 40px;
    height: 48px;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;

    .footer-btns {
      width: 100%;
      flex-direction: column;
      button,
      a {
        width: 100%;
      }
    }
  }
`;

export const CancelButton = styled(Button)`
  font-weight: 600;
  height: 48px;
  border-radius: 8px;
  background-color: #f5f5f5;
  color: #595959;
  border: 1px solid #d9d9d9;

  &:hover {
    background-color: #e8e8e8;
    color: #262626 !important;
  }
`;
