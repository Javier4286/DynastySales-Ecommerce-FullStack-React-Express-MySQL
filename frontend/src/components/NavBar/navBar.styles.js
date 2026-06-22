import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.$isDarkMode ? "#1f1f1f" : "#bbdefb")};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;

  .nav-top {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 0 4rem;
    height: 90px;
  }

  .nav-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }

  img {
    height: 75px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .nav-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
  }

  .welcome-msg {
    font-weight: 600;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#34495e")};
    font-size: 1rem;
    margin-right: 4px;
    transition: color 0.3s ease;
  }

  .action-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background-color: ${(props) =>
      props.$isDarkMode
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(255, 255, 255, 0.5)"};
    border-radius: 50%;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${(props) =>
        props.$isDarkMode
          ? "rgba(255, 255, 255, 0.25)"
          : "rgba(255, 255, 255, 0.9)"};
      transform: translateY(-2px);
    }
  }

  .anticon {
    font-size: 20px !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#34495e")} !important;
    transition: color 0.2s;
  }

  .action-icon-wrapper:hover .anticon {
    color: ${(props) => (props.$isDarkMode ? "#1890ff" : "#1a1a1a")} !important;
  }

  .action-icon-wrapper:hover .anticon-rest {
    color: #e67e22 !important;
  }

  .logout-btn {
    padding: 0;
    .anticon-logout {
      color: #ff4d4f !important;
    }
    &:hover {
      background-color: ${(props) =>
        props.$isDarkMode ? "#5c2526" : "#fff1f0"};
      .anticon-logout {
        color: #cf1322 !important;
      }
    }
  }

  .theme-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &.light {
      background-color: #2c3e50;
      .anticon {
        color: #f1c40f !important;
      }
    }

    &.dark {
      background-color: #f1c40f;
      .anticon {
        color: #2c3e50 !important;
      }
    }

    &:hover {
      transform: scale(1.08);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }

  .nav-bottom {
    display: flex;
    justify-content: center;
    padding: 0 2rem 1.5rem 2rem;
  }

  @media (max-width: 768px) {
    .nav-top {
      display: flex;
      flex-direction: column;
      padding: 12px 10px;
      gap: 12px;
      height: auto;
    }

    .nav-left {
      display: none !important;
    }

    .logo-wrapper {
      padding: 0;
      img {
        height: 55px;
      }
    }

    .nav-actions {
      width: 100%;
      justify-content: center;
      gap: 16px;
      padding-bottom: 4px;

      .welcome-msg {
        display: none;
      }
    }

    .nav-bottom {
      padding: 8px 12px 16px 12px;
    }
  }
`;

export default Nav;
