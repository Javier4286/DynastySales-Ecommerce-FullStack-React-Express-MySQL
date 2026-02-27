import styled from "styled-components";
import { Button } from "antd";

export const TrashContainer = styled.section`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: "Inter", sans-serif;
  min-height: 70vh;

  .header-area {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    h1 {
      font-weight: 800;
      font-size: 2.5rem;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: -1px;
    }
  }

  @media (max-width: 600px) {
    margin: 20px auto;
    .header-area {
      flex-direction: column;
      h1 {
        font-size: 1.8rem;
        text-align: center;
      }
    }
  }
`;

export const TrashItem = styled.article`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: white;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
    transform: translateX(5px);
  }

  .thumb {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    opacity: 0.7;
  }

  .info {
    h2 {
      font-size: 1.1rem;
      margin: 0;
      font-weight: 700;
      color: #333;
    }
    h3 {
      font-size: 0.9rem;
      margin: 0;
      color: #888;
    }
    .price {
      font-size: 0.9rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-top: 5px;
      display: block;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
    padding: 25px;

    .actions {
      width: 100%;
      justify-content: center;
      border-top: 1px solid #f0f0f0;
      margin-top: 10px;
      padding-top: 15px;
    }
  }
`;

export const RestoreButton = styled(Button)`
  font-weight: 700;
  height: 40px;
  border-radius: 8px;
  background-color: #34495e;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #1a1a1a !important;
    color: white !important;
    transform: scale(1.05);
  }
`;
