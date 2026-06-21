import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/useThemeStore";
import NotFoundWrapper from "./notFound.styles";

const NotFound = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeStore();

  return (
    <NotFoundWrapper $isDarkMode={isDarkMode}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    </NotFoundWrapper>
  );
};

export default NotFound;
