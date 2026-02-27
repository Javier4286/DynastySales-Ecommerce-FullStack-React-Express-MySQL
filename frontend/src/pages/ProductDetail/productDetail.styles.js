import styled from "styled-components";
import { Button } from "antd";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 40px 20px;
  background-color: #f0f2f5;
  font-family: "Inter", sans-serif;
`;

export const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1000px;
  width: 100%;
  background: #fdfaf6;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid #eeebe5;
  position: relative;

  .image-container {
    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin: 0;
      color: #1a1a1a;
      line-height: 1.1;
    }

    h2 {
      font-size: 1.4rem;
      color: #666;
      font-weight: 500;
      margin: 10px 0 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .meta-info {
      font-size: 0.95rem;
      color: #8c8c8c;
      margin-bottom: 20px;
    }

    .description {
      font-size: 1.05rem;
      line-height: 1.6;
      color: #444;
      margin-bottom: 30px;
    }

    .price-tag {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 10px;
    }

    .stock-status {
      margin-bottom: 30px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .actions {
      display: flex;
      gap: 15px;
      align-items: center;
      margin-top: auto;
      flex-wrap: wrap;
    }
  }

  .back-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    font-size: 24px;
    color: #34495e;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(-5px);
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    padding: 30px 20px;
    text-align: center;

    .image-container {
      max-width: 300px;
      margin: 0 auto;
    }

    .details {
      align-items: center;
    }

    .actions {
      justify-content: center;
    }

    .back-btn {
      top: 10px;
      left: 10px;
    }
  }
`;

export const CancelButton = styled(Button)`
  font-weight: 600;
  height: 50px;
  border-radius: 20px;
  font-size: 16px;
  background-color: #f5f5f5;
  color: #595959;
  padding: 0 25px;
  border: 1px solid #d9d9d9;

  &:hover {
    background-color: #e8e8e8;
    color: #262626 !important;
    border-color: #d9d9d9;
  }
`;
