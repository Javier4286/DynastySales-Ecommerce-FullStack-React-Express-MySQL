import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { Col, Form, Input, message, Row } from "antd";
import {
  CenteredTitle,
  RegisterContainer,
  SecundaryButton,
  StyleButton,
  StyledCard,
} from "./register.styles";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const { data } = await api.post("users/register", values);

      message.success(data.message || "Account created successfully!");

      navigate("/login");
    } catch (error) {
      message.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <RegisterContainer>
      <StyledCard
        title={<CenteredTitle level={2}>Create Account</CenteredTitle>}
        bordered={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onSubmit"
        >
          <Row gutter={[16, 0]}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="First Name"
                name="first_name"
                rules={[{ required: true, message: "First name is required" }]}
              >
                <Input
                  placeholder="Please enter your first name"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Last Name"
                name="last_name"
                rules={[{ required: true, message: "Last name is required" }]}
              >
                <Input placeholder="Please enter your last name" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Phone number is required" },
                ]}
              >
                <Input
                  placeholder="Please enter your phone number"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Invalid email format" },
                ]}
              >
                <Input placeholder="Please enter your email" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Address is required" }]}
          >
            <Input placeholder="Please enter your address" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              placeholder="Please enter your password"
              size="large"
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 20, marginBottom: 0 }}>
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
                  Register Now
                </StyleButton>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </StyledCard>
    </RegisterContainer>
  );
};

export default Register;
