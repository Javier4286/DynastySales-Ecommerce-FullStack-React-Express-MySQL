import { API_BASE_URL } from "../../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Spin, message, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import api from "../../utils/api";
import useUserStore from "../../store/useUserStore";
import useThemeStore from "../../store/useThemeStore";
import {
  Article,
  Section,
  CancelButton,
  PrimaryButton,
  LoadingContainer,
} from "./productDetail.styles";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { isDarkMode } = useThemeStore();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await api.get(`/products/detailProduct/${id}`);
      return data;
    },
    retry: false,
  });

  const handleAddToCart = async () => {
    try {
      const response = await api.post("/carts/add", {
        user_id: user.id,
        product_id: product.id,
        quantity: 1,
      });

      message.success(response.data.message);
    } catch (error) {
      message.error(error.response?.data?.message || "Error adding to cart");
    }
  };

  if (isLoading) {
    return (
      <Section $isDarkMode={isDarkMode}>
        <LoadingContainer>
          <Spin size="large" />
        </LoadingContainer>
      </Section>
    );
  }

  if (isError || !product) {
    return (
      <Section $isDarkMode={isDarkMode}>
        <Article $isDarkMode={isDarkMode}>
          <div className="details">
            <h1>Vinyl not found</h1>
            <CancelButton
              $isDarkMode={isDarkMode}
              onClick={() => navigate("/")}
              style={{ marginTop: "20px" }}
            >
              Back to Home
            </CancelButton>
          </div>
        </Article>
      </Section>
    );
  }

  return (
    <Section $isDarkMode={isDarkMode}>
      <Article $isDarkMode={isDarkMode}>
        <div className="image-container">
          <img
            src={
              product.image.startsWith("http://") ||
              product.image.startsWith("https://")
                ? product.image
                : `${API_BASE_URL}${product.image}`
            }
            alt={product.album}
          />
        </div>

        <section className="details">
          <div className="meta-info">Release Year: {product.release_year}</div>

          <h1>{product.album}</h1>
          <h2>{product.artist}</h2>

          <div className="stock-status">
            {product.stock > 0 ? (
              <Tag color="green">{product.stock} units available</Tag>
            ) : (
              <Tag color="red">Out of stock</Tag>
            )}
          </div>

          <p className="description">{product.description}</p>

          <div className="price-tag">${product.price}</div>

          <div className="actions">
            <CancelButton
              $isDarkMode={isDarkMode}
              onClick={() => navigate("/")}
            >
              Back
            </CancelButton>
            {user && !user.is_admin && product.stock > 0 && (
              <PrimaryButton
                $isDarkMode={isDarkMode}
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
                onClick={handleAddToCart}
              >
                Add to Cart
              </PrimaryButton>
            )}
          </div>
        </section>
      </Article>
    </Section>
  );
};

export default ProductDetail;
