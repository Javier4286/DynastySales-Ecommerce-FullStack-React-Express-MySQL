import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px 20px;
  justify-content: center;
  align-items: stretch;
  background-color: ${(props) => (props.$isDarkMode ? "#121212" : "#f0f2f5")};
  font-family: "Inter", sans-serif;
  min-height: 60vh;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    width: 100%;
    gap: 32px;
    padding: 20px;
  }

  .cloud-warn-banner {
    max-width: 550px;
    background-color: ${(props) => (props.$isDarkMode ? "#2c1d00" : "#fffbe6")};
    border: 1px solid ${(props) => (props.$isDarkMode ? "#614700" : "#ffe58f")};
    border-radius: 24px;
    padding: 18px 24px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    animation: fadeIn 0.5s ease forwards;

    .warn-icon {
      font-size: 20px;
      color: #faad14;
      margin-top: 2px;
    }

    .warn-text {
      color: ${(props) => (props.$isDarkMode ? "#d4b106" : "#3d2a00")};
      font-size: 13.5px;
      line-height: 1.5;
      font-weight: 500;
      text-align: left;
    }
  }

  .empty-container {
    width: 100%;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  article {
    background: ${(props) => (props.$isDarkMode ? "#1e1e1e" : "#fdfaf6")};
    border-radius: 20px;
    padding: 20px;
    box-shadow: ${(props) =>
      props.$isDarkMode
        ? "0 8px 20px rgba(0, 0, 0, 0.4)"
        : "0 8px 20px rgba(0, 0, 0, 0.06)"};
    transition: all 0.4s ease;
    width: calc(25% - 18px);
    min-width: 250px;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid ${(props) => (props.$isDarkMode ? "#333333" : "#eeebe5")};

    &:hover {
      transform: translateY(-10px);
      box-shadow: ${(props) =>
        props.$isDarkMode
          ? "0 12px 30px rgba(0, 0, 0, 0.6)"
          : "0 12px 30px rgba(0, 0, 0, 0.12)"};
      border-color: ${(props) => (props.$isDarkMode ? "#555555" : "#d1ccc0")};
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
      color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
      height: 2.6em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    h3 {
      font-size: 0.95rem;
      color: ${(props) => (props.$isDarkMode ? "#b3b3b3" : "#666")};
      margin-bottom: 10px;
    }

    .price-tag {
      background: ${(props) => (props.$isDarkMode ? "#ffffff" : "#222")};
      color: ${(props) => (props.$isDarkMode ? "#121212" : "#fff")};
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
      border-top: 1px solid
        ${(props) => (props.$isDarkMode ? "#333333" : "#f0f0f0")};

      .anticon {
        font-size: 24px !important;
        cursor: pointer;
        color: ${(props) =>
          props.$isDarkMode ? "#ffffff" : "#34495e"} !important;
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

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1200px) {
    article {
      width: calc(33.33% - 16px);
    }
  }

  @media (max-width: 900px) {
    article {
      width: calc(50% - 12px);
    }
  }

  @media (max-width: 600px) {
    padding: 24px 16px;
    gap: 24px;

    article {
      width: 100%;
      max-width: 290px;
      padding: 20px;
    }
  }
`;

export default Section;
