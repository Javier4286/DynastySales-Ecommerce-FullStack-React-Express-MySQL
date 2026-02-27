import styled from "styled-components";

export const UpdateContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 20px;
  font-family: "Inter", sans-serif;

  .update-card {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 8px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 600px) {
    .form-grid,
    .stats-grid {
      grid-template-columns: 1fr;
    }
    .ant-btn {
      width: 100%;
    }
  }
`;
