import styled from "styled-components";

const NotFoundWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: #f0f2f5;
  padding: 20px;
  font-family: "Inter", sans-serif;

  .ant-result {
    background: #fdfaf6;
    padding: 60px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid #eeebe5;
  }

  .ant-result-title {
    font-size: 72px;
    font-weight: 800;
    color: #34495e;
    line-height: 1;
  }

  .ant-result-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 24px;
  }

  button {
    height: 45px;
    padding: 0 30px;
    font-weight: 600;
    border-radius: 8px;
    background-color: #34495e;
    border: none;

    &:hover {
      background-color: #1a1a1a !important;
      transform: translateY(-2px);
      transition: all 0.3s ease;
    }
  }
`;

export default NotFoundWrapper;
