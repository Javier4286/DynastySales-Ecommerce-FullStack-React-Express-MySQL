import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #bbdefb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
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
    gap: 35px;
  }

  .welcome-msg {
    font-weight: 600;
    color: #34495e;
    font-size: 1rem;
  }

  .anticon {
    font-size: 26px !important;
    color: #34495e !important;
    transition: all 0.2s;
    &:hover {
      color: #1a1a1a !important;
      transform: translateY(-2px);
    }
  }

  .anticon-rest:hover {
    color: #e67e22 !important;
  }

  .logout-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;

    .anticon-logout {
      color: #ff4d4f !important;
      &:hover {
        color: #cf1322 !important;
      }
    }
  }

  .nav-bottom {
    display: flex;
    justify-content: center;
    padding: 0 2rem 1.5rem 2rem;
  }

  @media (max-width: 600px) {
    .nav-top {
      display: flex;
      flex-direction: column;
      padding: 8px 10px;
      gap: 5px;
      height: auto;
    }

    .nav-left {
      display: none !important;
    }

    .logo-wrapper {
      padding: 0;
      img {
        height: 45px;
      }
    }

    .nav-actions {
      width: auto;
      align-self: center;
      gap: 20px;
      padding-bottom: 5px;
      .welcome-msg {
        display: none;
      }
    }

    .nav-bottom {
      padding: 5px 10px 10px;
    }
  }
`;

export default Nav;
