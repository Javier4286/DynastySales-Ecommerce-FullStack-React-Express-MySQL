import { useNavigate } from "react-router-dom";
import { Col, Form, Input, message, Row } from "antd";
import useUserStore from "../../store/useUserStore";
import useCartStore from "../../store/useCartStore";
import api from "../../utils/api";
import {
  CenteredTitle,
  LoginContainer,
  SecundaryButton,
  StyleButton,
  StyledCard,
} from "./login.styles";

const Login = () => {
  const { fetchCart } = useCartStore();
  const { login } = useUserStore();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const { data } = await api.post("/users/login", values);

      login(data.user);

      await fetchCart(data.user.id);

      message.success(data.message || "Welcome back!");

      navigate("/");
    } catch (error) {
      message.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <LoginContainer>
      <StyledCard
        title={<CenteredTitle level={2}>Sign In</CenteredTitle>}
        bordered={false}
      >
        <Form
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
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
            style={{ marginBottom: 30 }}
          >
            <Input.Password
              placeholder="Please enter your password"
              size="large"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <SecundaryButton block onClick={() => navigate("/")}>
                  Cancel
                </SecundaryButton>
              </Col>
              <Col xs={24} sm={12}>
                <StyleButton
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                >
                  Log In
                </StyleButton>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </StyledCard>
    </LoginContainer>
  );
};

export default Login;
