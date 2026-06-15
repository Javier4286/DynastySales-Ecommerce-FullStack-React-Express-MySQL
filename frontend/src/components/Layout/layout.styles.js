import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  background-color: ${(props) => (props.$isDarkMode ? "#121212" : "#f4f6f9")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#333333")};

  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    background-color: ${(props) =>
      props.$isDarkMode ? "#121212" : "#f4f6f9"} !important;
  }

  .main-content {
    flex: 1;
  }
`;

export default LayoutContainer;
