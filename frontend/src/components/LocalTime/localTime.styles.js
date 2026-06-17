import styled from "styled-components";
import { EnvironmentOutlined } from "@ant-design/icons";

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  padding: 4px 8px;

  .location-text {
    font-size: 0.9rem;
    color: ${(props) => (props.$isDarkMode ? "#b3b3b3" : "#455a64")};
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  .time-divider {
    color: #1890ff;
    font-weight: 300;
    opacity: 0.4;
    user-select: none;
  }

  .time-display {
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${(props) =>
      props.$isDarkMode
        ? "rgba(24, 144, 255, 0.15)"
        : "rgba(24, 144, 255, 0.08)"};
    padding: 5px 12px;
    border-radius: 20px;
  }

  .clock-icon {
    font-size: 1.1rem;
    color: #1890ff;
  }

  .time-digits {
    font-family: "JetBrains Mono", "Roboto Mono", monospace;
    font-weight: 700;
    color: #1890ff;
    font-size: 0.95rem;
    min-width: 80px;
    text-align: center;
  }

  @media (max-width: 600px) {
    .location-text {
      display: none;
    }
    .time-divider {
      display: none;
    }
  }
`;

export const StyledEnvironmentIcon = styled(EnvironmentOutlined)`
  color: #1890ff;
  font-size: 1.1rem;
`;
