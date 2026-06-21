import { API_BASE_URL } from "../../utils/api";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Empty, Modal, message, Tooltip, Spin } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import useUserStore from "../../store/useUserStore";
import useCartStore from "../../store/useCartStore";
import {
  CartContainer,
  CartItem,
  CartFooter,
  CancelButton,
  CartContentWrapper,
  StyledEmpty,
  QtySelectorContainer,
  QtyValue,
  CheckoutButton,
} from "./cart.styles";
import useThemeStore from "../../store/useThemeStore";

const { confirm } = Modal;

const Cart = () => {
  const { cart, fetchCart, removeFromCart, updateQuantity } = useCartStore();
  const [loading, setLoading] = useState(false);
  const { user } = useUserStore();
  const navigate = useNavigate();
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (user?.id) fetchCart(user.id);
  }, [user?.id, fetchCart]);

  const total = useMemo(
    () => cart.reduce((acc, p) => acc + p.quantity * p.price, 0),
    [cart],
  );

  const handleUpdate = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      setLoading(true);
      await updateQuantity(user.id, productId, newQuantity);
    } catch (error) {
      error.response?.data?.errors?.forEach((err) =>
        message.error(err.message),
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = (productId, albumName) => {
    confirm({
      title: "Remove Product",
      icon: <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />,
      content: `Are you sure you want to remove "${albumName}"?`,
      okText: "Remove",
      okType: "danger",
      cancelText: "Back",
      className: isDarkMode ? "dark-modal-confirm" : "",

      async onOk() {
        try {
          setLoading(true);
          await removeFromCart(user.id, productId);
        } catch (error) {
          error.response?.data?.errors?.forEach((err) =>
            message.error(err.message),
          );
        } finally {
          setLoading(false);
        }
      },
    });
  };

  if (!user)
    return (
      <CartContainer $isDarkMode={isDarkMode}>
        <h1>Please log in to see your cart</h1>
      </CartContainer>
    );

  return (
    <CartContainer $isDarkMode={isDarkMode}>
      <Spin spinning={loading}>
        <CartContentWrapper>
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <StyledEmpty
              description="Your cart is empty"
              $isDarkMode={isDarkMode}
            >
              <CancelButton
                $isDarkMode={isDarkMode}
                onClick={() => navigate("/")}
              >
                Go to Home
              </CancelButton>
            </StyledEmpty>
          ) : (
            <>
              {cart.map((product) => (
                <CartItem key={product.id} $isDarkMode={isDarkMode}>
                  <img
                    src={
                      product.image.startsWith("http://") ||
                      product.image.startsWith("https://")
                        ? product.image
                        : `${API_BASE_URL}${product.image}`
                    }
                    alt={product.album}
                    className="thumb"
                  />
                  <div className="info">
                    <h2>{product.album}</h2>
                    <h3>{product.artist}</h3>
                    <span className="unit-price">${product.price} each</span>
                  </div>
                  <div className="actions">
                    <QtySelectorContainer $isDarkMode={isDarkMode}>
                      <Button
                        type="text"
                        icon={<MinusOutlined />}
                        onClick={() =>
                          handleUpdate(product.id, product.quantity - 1)
                        }
                        disabled={product.quantity <= 1}
                      />
                      <QtyValue $isDarkMode={isDarkMode}>
                        {product.quantity}
                      </QtyValue>
                      <Button
                        type="text"
                        icon={<PlusOutlined />}
                        onClick={() =>
                          handleUpdate(product.id, product.quantity + 1)
                        }
                        disabled={product.quantity >= product.stock}
                      />
                    </QtySelectorContainer>
                    <Tooltip title="Remove">
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleRemove(product.id, product.album)}
                      />
                    </Tooltip>
                    <div className="subtotal">
                      ${(product.quantity * product.price).toFixed(2)}
                    </div>
                  </div>
                </CartItem>
              ))}

              <CartFooter $isDarkMode={isDarkMode}>
                <div className="total-section">
                  <span>Total Amount:</span>
                  <h3>${total.toFixed(2)}</h3>
                </div>
                <div className="footer-btns">
                  <CancelButton
                    $isDarkMode={isDarkMode}
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </CancelButton>
                  <CheckoutButton
                    $isDarkMode={isDarkMode}
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </CheckoutButton>
                </div>
              </CartFooter>
            </>
          )}
        </CartContentWrapper>
      </Spin>
    </CartContainer>
  );
};

export default Cart;
