import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select, Typography, message, Space } from "antd";
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
  SpinContainer,
  CenteredResult,
  StyledInput,
  StyledSelect,
  StyledDivider,
  StyledText,
  StyledIconWrapper,
  ActionsSpace,
  CheckoutGlobalStyles,
} from "./checkout.styles";
import useThemeStore from "../../store/useThemeStore";

const { Option } = Select;

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, fetchCart, createOrder } = useCartStore();
  const { user } = useUserStore();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { isDarkMode } = useThemeStore();

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
      message.success(result.message);
      navigate("/");
    } else {
      message.error(result.message);
    }
    setLoading(false);
  };

  if (!user) return <SpinContainer size="large" />;

  if (!cart || cart.length === 0) {
    return (
      <CenteredResult
        $isDarkMode={isDarkMode}
        icon={<ShoppingCartOutlined className="empty-cart-icon" />}
        title="Your cart is currently empty"
        extra={
          <PrimaryButton
            $isDarkMode={isDarkMode}
            className="go-shopping-btn"
            onClick={() => navigate("/")}
          >
            Go Shopping
          </PrimaryButton>
        }
      />
    );
  }

  return (
    <>
      <CheckoutGlobalStyles $isDarkMode={isDarkMode} />
      <CheckoutContainer $isDarkMode={isDarkMode}>
        <StyledTitle level={2} $isDarkMode={isDarkMode}>
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
              $isDarkMode={isDarkMode}
              title={
                <Space>
                  <StyledIconWrapper $isDarkMode={isDarkMode}>
                    <CarOutlined />
                  </StyledIconWrapper>
                  <span>Shipping Information</span>
                </Space>
              }
            >
              <Form.Item
                name="delivery_method"
                label="Select Delivery Method"
                rules={[{ required: true }]}
              >
                <StyledSelect
                  size="large"
                  $isDarkMode={isDarkMode}
                  popupClassName="checkout-select-dropdown"
                >
                  <Option value="pickup">Pickup in Store</Option>
                  <Option value="delivery">Home Delivery</Option>
                </StyledSelect>
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
                      <StyledInput
                        $isDarkMode={isDarkMode}
                        placeholder="Please enter your address"
                        size="large"
                        prefix={<HomeOutlined className="input-prefix-icon" />}
                      />
                    </Form.Item>
                  )
                }
              </Form.Item>
            </StyledCard>
          </div>

          <div className="summary-column">
            <StyledCard
              $isDarkMode={isDarkMode}
              title={
                <Space>
                  <StyledIconWrapper $isDarkMode={isDarkMode}>
                    <ShoppingCartOutlined />
                  </StyledIconWrapper>
                  <span>Order Summary</span>
                </Space>
              }
            >
              <SummaryRow $isDarkMode={isDarkMode}>
                <Typography.Text className="summary-text-muted">
                  Items in cart:
                </Typography.Text>
                <StyledText strong $isDarkMode={isDarkMode}>
                  {cart.length}
                </StyledText>
              </SummaryRow>

              <StyledDivider $isDarkMode={isDarkMode} />

              <SummaryRow $isDarkMode={isDarkMode}>
                <Typography.Text className="total-label">Total</Typography.Text>
                <Typography.Text className="total-amount">
                  ${total.toLocaleString()}
                </Typography.Text>
              </SummaryRow>

              <ActionsSpace direction="vertical" size="middle">
                <PrimaryButton
                  type="submit"
                  disabled={loading}
                  $isDarkMode={isDarkMode}
                >
                  {loading ? (
                    <SpinContainer size="small" className="inline-loader" />
                  ) : (
                    <>
                      <CheckCircleOutlined /> Place Order
                    </>
                  )}
                </PrimaryButton>

                <SecondaryButton
                  type="button"
                  onClick={() => navigate("/cart")}
                  $isDarkMode={isDarkMode}
                >
                  <RollbackOutlined /> Review Cart
                </SecondaryButton>
              </ActionsSpace>
            </StyledCard>
          </div>
        </Form>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
