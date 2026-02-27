import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Select,
  Typography,
  Divider,
  message,
  Space,
  Result,
  Spin,
} from "antd";
import {
  ShoppingCartOutlined,
  CarOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import useUserStore from "../../store/useUserStore";
import useCartStore from "../../store/useCartStore";
import {
  CheckoutContainer,
  StyledCard,
  StyledTitle,
  SummaryRow,
  PrimaryButton,
  SecondaryButton,
} from "./checkout.styles";

const { Text } = Typography;

const { Option } = Select;

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, fetchCart, createOrder } = useCartStore();
  const { user } = useUserStore();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchCart(user.id);
    }
  }, [user, fetchCart]);

  const total = useMemo(() => {
    if (!Array.isArray(cart)) return 0;

    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const onFinish = async (values) => {
    setLoading(true);

    const orderData = {
      user_id: user.id,
      delivery_method: values.delivery_method,
      shipping_address:
        values.delivery_method === "delivery" ? values.address : "Pickup",
    };

    const result = await createOrder(orderData);

    if (result.success) {
      message.success(result.message || "Purchase completed!");

      navigate("/");
    } else {
      message.error(result.message || "Error processing order");
    }
    setLoading(false);
  };

  if (!user)
    return (
      <Spin size="large" style={{ display: "block", margin: "100px auto" }} />
    );

  if (!cart || cart.length === 0) {
    return (
      <Result
        icon={<ShoppingCartOutlined style={{ color: "#ccc" }} />}
        title="Your cart is currently empty"
        extra={
          <PrimaryButton
            style={{ maxWidth: 250, margin: "0 auto" }}
            onClick={() => navigate("/")}
          >
            Go Shopping
          </PrimaryButton>
        }
      />
    );
  }

  return (
    <CheckoutContainer>
      <StyledTitle level={2} style={{ marginBottom: 40 }}>
        Checkout
      </StyledTitle>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          delivery_method: "pickup",
          address: user?.address || "",
        }}
        className="checkout-grid"
      >
        <div className="form-column">
          <StyledCard
            title={
              <Space>
                <CarOutlined style={{ color: "#1a1a1a" }} />
                <span>Shipping Information</span>
              </Space>
            }
          >
            <Form.Item
              name="delivery_method"
              label="Select Delivery Method"
              rules={[{ required: true }]}
            >
              <Select size="large">
                <Option value="pickup">Pickup in Store</Option>
                <Option value="delivery">Home Delivery</Option>
              </Select>
            </Form.Item>

            <Form.Item
              noStyle
              shouldUpdate={(prev, curr) =>
                prev.delivery_method !== curr.delivery_method
              }
            >
              {({ getFieldValue }) =>
                getFieldValue("delivery_method") === "delivery" && (
                  <Form.Item
                    name="address"
                    label="Shipping Address"
                    rules={[
                      {
                        required: true,
                        message: "Please provide a delivery address",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Please enter your address"
                      size="large"
                      prefix={<HomeOutlined style={{ color: "#bfbfbf" }} />}
                    />
                  </Form.Item>
                )
              }
            </Form.Item>
          </StyledCard>
        </div>

        <div className="summary-column">
          <StyledCard
            title={
              <Space>
                <ShoppingCartOutlined style={{ color: "#1a1a1a" }} />
                <span>Order Summary</span>
              </Space>
            }
          >
            <SummaryRow>
              <Text style={{ color: "#666" }}>Items in cart:</Text>
              <Text strong>{cart.length}</Text>
            </SummaryRow>

            <Divider style={{ margin: "20px 0" }} />

            <SummaryRow>
              <Text className="total-label" style={{ fontSize: 18 }}>
                Total
              </Text>
              <Text className="total-amount" style={{ fontSize: 22 }}>
                ${total.toLocaleString()}
              </Text>
            </SummaryRow>

            <Space
              direction="vertical"
              style={{ width: "100%", marginTop: 30 }}
              size="middle"
            >
              <PrimaryButton type="submit" disabled={loading}>
                {loading ? (
                  <Spin size="small" />
                ) : (
                  <>
                    <CheckCircleOutlined /> Place Order
                  </>
                )}
              </PrimaryButton>

              <SecondaryButton type="button" onClick={() => navigate("/cart")}>
                <RollbackOutlined /> Review Cart
              </SecondaryButton>
            </Space>
          </StyledCard>
        </div>
      </Form>
    </CheckoutContainer>
  );
};

export default Checkout;
