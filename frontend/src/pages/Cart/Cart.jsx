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
} from "./cart.styles";

const { confirm } = Modal;

const Cart = () => {
  const { cart, fetchCart, removeFromCart, updateQuantity } = useCartStore();
  const [loading, setLoading] = useState(false);
  const { user } = useUserStore();
  const navigate = useNavigate();

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
      message.error("Failed to update quantity");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = (productId, albumName, currentQty) => {
    confirm({
      title: "Remove Product",
      icon: <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />,
      content: `Are you sure you want to remove "${albumName}"?`,
      okText: "Remove",
      okType: "danger",
      cancelText: "Back",

      async onOk() {
        try {
          setLoading(true);

          for (let i = 0; i < currentQty; i++) {
            await removeFromCart(user.id, productId);
          }

          message.success(`${albumName} removed`);
        } catch (error) {
          message.error("Error removing product");
        } finally {
          setLoading(false);
        }
      },
    });
  };

  if (!user)
    return (
      <CartContainer>
        <h1>Please log in to see your cart</h1>
      </CartContainer>
    );

  return (
    <CartContainer>
      <Spin spinning={loading}>
        <div style={{ minHeight: "200px" }}>
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <Empty
              description="Your cart is empty"
              style={{ padding: "60px 0" }}
            >
              <CancelButton onClick={() => navigate("/")}>
                Go to Home
              </CancelButton>
            </Empty>
          ) : (
            <>
              {cart.map((product) => (
                <CartItem key={product.id}>
                  <img
                    src={product.image}
                    alt={product.album}
                    className="thumb"
                  />
                  <div className="info">
                    <h2>{product.album}</h2>
                    <h3>{product.artist}</h3>
                    <span className="unit-price">${product.price} each</span>
                  </div>
                  <div className="actions">
                    <div
                      className="qty-selector"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#f0f0f0",
                        borderRadius: "20px",
                        padding: "4px",
                      }}
                    >
                      <Button
                        type="text"
                        icon={<MinusOutlined />}
                        onClick={() =>
                          handleUpdate(product.id, product.quantity - 1)
                        }
                        disabled={product.quantity <= 1}
                      />
                      <span style={{ fontWeight: 700, padding: "0 10px" }}>
                        {product.quantity}
                      </span>
                      <Button
                        type="text"
                        icon={<PlusOutlined />}
                        onClick={() =>
                          handleUpdate(product.id, product.quantity + 1)
                        }
                        disabled={product.quantity >= product.stock}
                      />
                    </div>
                    <Tooltip title="Remove">
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() =>
                          handleRemove(
                            product.id,
                            product.album,
                            product.quantity,
                          )
                        }
                      />
                    </Tooltip>
                    <div className="subtotal">
                      ${(product.quantity * product.price).toFixed(2)}
                    </div>
                  </div>
                </CartItem>
              ))}

              <CartFooter>
                <div className="total-section">
                  <span>Total Amount:</span>
                  <h3>${total.toFixed(2)}</h3>
                </div>
                <div className="footer-btns">
                  <CancelButton onClick={() => navigate("/")}>
                    Cancel
                  </CancelButton>
                  <button
                    className="checkout-btn"
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </button>
                </div>
              </CartFooter>
            </>
          )}
        </div>
      </Spin>
    </CartContainer>
  );
};

export default Cart;
