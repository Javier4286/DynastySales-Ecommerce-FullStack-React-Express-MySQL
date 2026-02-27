import { useEffect } from "react";
import useUserStore from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";
import { Col, Form, Input, message, Row } from "antd";
import api from "../../utils/api";
import {
  CancelButton,
  CenteredTitle,
  ProfileContainer,
  StyledButton,
  StyledCard,
  StyledDivider,
  VerificationText,
} from "./Profile.styles";

const Profile = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { user, login } = useUserStore();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        address: user.address,
      });
    }
  }, [user, form]);

  const onFinish = async (values) => {
    try {
      const { data } = await api.put(`/users/edit/${user.id}`, values);

      login(data.user);

      message.success(data.message || "Profile updated successfully");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      message.error(error.response?.data?.message || "Error updating profile");
    }
  };

  return (
    <ProfileContainer>
      <StyledCard
        title={<CenteredTitle level={2}>Account Settings</CenteredTitle>}
        bordered={false}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onSubmit"
        >
          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="First Name"
                name="first_name"
                rules={[
                  { required: true, message: "First name is required" },
                  { max: 100, message: "Max 100 characters" },
                ]}
              >
                <Input placeholder="First Name" size="large" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Last Name"
                name="last_name"
                rules={[
                  { required: true, message: "Last name is required" },
                  { max: 100, message: "Max 100 characters" },
                ]}
              >
                <Input placeholder="Last Name" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Phone number is required" },
                  { max: 20, message: "Max 20 characters" },
                ]}
              >
                <Input placeholder="Phone number" size="large" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Invalid email" },
                  { max: 150, message: "Max 150 characters" },
                ]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Shipping Address"
            name="address"
            rules={[
              { required: true, message: "Address is required" },
              { max: 255, message: "Max 255 characters" },
            ]}
          >
            <Input placeholder="Address" size="large" />
          </Form.Item>

          <StyledDivider orientation="center">Security Check</StyledDivider>

          <VerificationText>
            To save these changes, please confirm your current password.
          </VerificationText>

          <Row justify="center">
            <Col xs={24} md={18}>
              <Form.Item
                label="Current Password"
                name="password"
                rules={[{ required: true, message: "Password is required" }]}
                style={{ marginBottom: 30 }}
              >
                <Input.Password
                  placeholder="Enter your password"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ marginBottom: 0 }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <CancelButton block onClick={() => navigate("/")}>
                  Discard Changes
                </CancelButton>
              </Col>
              <Col xs={24} sm={12}>
                <StyledButton type="primary" htmlType="submit" block>
                  Save Profile
                </StyledButton>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </StyledCard>
    </ProfileContainer>
  );
};

export default Profile;
