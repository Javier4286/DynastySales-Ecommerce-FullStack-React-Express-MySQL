import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #d6eaff;
  padding: 1.5rem 1rem;
  margin-top: auto;
  border-top: 1px solid #bae7ff;
  font-family: "Inter", sans-serif;

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
    }
  }

  .footer-brand-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  .footer-logo-img {
    height: 65px;
    width: auto;
    object-fit: contain;
    margin-left: -2px;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }

  .footer-logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -1px;
    margin-top: -8px;
  }

  .section-title {
    font-weight: 800 !important;
    letter-spacing: 0.5px;
    font-size: 0.85rem !important;
    color: #1a1a1a !important;
    margin-top: 55px !important;
    margin-bottom: 10px !important;
    text-transform: uppercase;

    @media (max-width: 768px) {
      margin-top: 20px !important;
    }
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #434343;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .copyright {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid #bae7ff;
    color: #595959;
    font-size: 0.75rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
      padding-top: 20px;
    }
  }
`;
