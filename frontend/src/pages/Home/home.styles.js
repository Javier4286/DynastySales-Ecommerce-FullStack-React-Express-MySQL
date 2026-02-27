import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 45px;
  padding: 50px 40px;
  justify-content: center;
  justify-items: center;
  background-color: #f0f2f5;
  font-family: "Inter", sans-serif;
  min-height: 60vh;

  article {
    background: #fdfaf6;
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    transition: all 0.4s ease;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid #eeebe5;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
      border-color: #d1ccc0;
    }

    img.album-cover {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 1.1rem;
      font-weight: 800;
      margin: 15px 0 5px;
      color: #1a1a1a;
      height: 2.6em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    h3 {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 10px;
    }

    .price-tag {
      background: #222;
      color: #fff;
      padding: 5px 18px;
      border-radius: 50px;
      font-size: 1.05rem;
      font-weight: 700;
      margin: 18px 0;
    }

    .actions-container {
      display: flex;
      gap: 25px;
      margin-top: auto;
      padding-top: 15px;
      width: 100%;
      justify-content: center;
      border-top: 1px solid #f0f0f0;

      .anticon {
        font-size: 24px !important;
        cursor: pointer;
        color: #34495e !important;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.2);
        }
      }

      .anticon-delete:hover {
        color: #ff4d4f !important;
      }

      .anticon-reload:hover {
        color: #52c41a !important;
      }

      .anticon-edit:hover {
        color: #1890ff !important;
      }
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 20px;

    article {
      width: 100%;
      max-width: 320px;
      padding: 18px;
    }
  }
`;

export default Section;
