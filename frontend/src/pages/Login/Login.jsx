import { useNavigate } from "react-router-dom";
import { Col, Form, Input, message, Row } from "antd";
import useUserStore from "../../store/useUserStore";
import useCartStore from "../../store/useCartStore";
import useThemeStore from "../../store/useThemeStore";
import api from "../../utils/api";
import {
  CenteredTitle,
  DemoLinkContainer,
  LoginContainer,
  SecundaryButton,
  StyleButton,
  StyledCard,
} from "./login.styles";

const Login = () => {
  const { fetchCart } = useCartStore();
  const { login } = useUserStore();
  const { isDarkMode } = useThemeStore();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const { data } = await api.post("/users/login", values);

      login(data.user);

      await fetchCart(data.user.id);

      message.success(data.message);

      navigate("/");
    } catch (error) {
      const serverErrors = error.response?.data?.errors;

      if (serverErrors && Array.isArray(serverErrors)) {
        serverErrors.forEach((err) => {
          message.error(err.message);
        });
      } else {
        message.error(
          error.response?.data?.message || "Server connection error",
        );
      }
    }
  };

  const handleAdminAutoFill = (e) => {
    e.preventDefault();
    form.setFieldsValue({
      email: "admin@dynastysales.com",
      password: "admin123",
    });
    message.info("Admin demo credentials loaded!");
  };

  return (
    <LoginContainer $isDarkMode={isDarkMode}>
      <StyledCard
        $isDarkMode={isDarkMode}
        title={
          <CenteredTitle level={2} $isDarkMode={isDarkMode}>
            Sign In
          </CenteredTitle>
        }
        bordered={false}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onSubmit"
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Please enter your email" size="large" />
          </Form.Item>

          <Form.Item
            className="password-item"
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password
              placeholder="Please enter your password"
              size="large"
            />
          </Form.Item>

          <Form.Item className="actions-item">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <SecundaryButton
                  block
                  onClick={() => navigate("/")}
                  $isDarkMode={isDarkMode}
                >
                  Cancel
                </SecundaryButton>
              </Col>
              <Col xs={24} sm={12}>
                <StyleButton
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  $isDarkMode={isDarkMode}
                >
                  Log In
                </StyleButton>
              </Col>
            </Row>
          </Form.Item>

          <DemoLinkContainer $isDarkMode={isDarkMode}>
            Want to explore?{" "}
            <a href="#" onClick={handleAdminAutoFill}>
              Quick Admin Login
            </a>
          </DemoLinkContainer>
        </Form>
      </StyledCard>
    </LoginContainer>
  );
};

export default Login;
