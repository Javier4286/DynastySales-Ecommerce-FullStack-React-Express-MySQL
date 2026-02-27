import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
  font-family: "Inter", sans-serif;

  .search-main-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
  }

  .search-input {
    width: 100%;
    max-width: 550px;
    border-radius: 20px !important;
    height: 40px;
  }

  .filters-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 15px;
    width: fit-content;
  }

  .price-inputs-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .number-input {
    width: 100px !important;
    border-radius: 8px !important;
  }

  .category-select {
    width: 180px !important;
  }

  @media (max-width: 768px) {
    .filters-row {
      flex-direction: column;
      width: 95%;
      padding: 15px;
      gap: 12px;
    }

    .price-inputs-group {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;
      order: 1;
    }

    .number-input {
      width: 110px !important;
      height: 35px !important;
      font-size: 14px;
    }

    .ant-radio-group {
      order: 2;
      display: flex !important;
      justify-content: center;
      width: 100%;
    }

    .ant-radio-button-wrapper {
      width: 70px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .category-select {
      order: 3;
      width: 100% !important;
      max-width: 250px;
    }
  }
`;
