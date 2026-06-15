import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => (props.$isDarkMode ? "#121212" : "#d6eaff")};
  padding: 1.5rem 1rem;
  margin-top: auto;
  border-top: 1px solid
    ${(props) => (props.$isDarkMode ? "#333333" : "#bae7ff")};
  font-family: "Inter", sans-serif;
  transition:
    background-color 0.3s ease,
    border-top 0.3s ease;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 40px;
    align-items: start;
    padding-top: 10px;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
      margin-top: 15px;
    }
  }

  .footer-brand-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
    }
  }

  .footer-logo-img {
    height: 65px;
    width: auto;
    object-fit: contain;
    margin-left: -2px;

    @media (max-width: 768px) {
      margin-left: 0;
      height: 40px;
    }
  }

  .footer-logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
    letter-spacing: -1px;
    margin-top: -8px;

    @media (max-width: 768px) {
      margin-top: 0;
      font-size: 1.4rem;
    }
  }

  .section-title {
    font-weight: 800 !important;
    letter-spacing: 0.5px;
    font-size: 0.85rem !important;
    color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")} !important;
    margin-top: 55px !important;
    margin-bottom: 10px !important;
    text-transform: uppercase;

    @media (max-width: 768px) {
      margin-top: 15px !important;
    }
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${(props) => (props.$isDarkMode ? "#b3b3b3" : "#434343")};
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #1890ff;
    }

    @media (max-width: 768px) {
      justify-content: center;
      width: 100%;
    }
  }

  .developer-space {
    @media (max-width: 768px) {
      width: 100%;
      align-items: center !important;
    }
  }

  .copyright {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid
      ${(props) => (props.$isDarkMode ? "#333333" : "#bae7ff")};
    color: ${(props) => (props.$isDarkMode ? "#8c8c8c" : "#595959")};
    font-size: 0.75rem;
    line-height: 1.5;
    transition: border-top 0.3s ease;

    @media (max-width: 768px) {
      padding-bottom: 3.5rem;
    }
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 25px;
      padding-top: 10px;
    }
  }
`;
