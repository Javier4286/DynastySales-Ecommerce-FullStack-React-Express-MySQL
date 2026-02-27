import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Spin, message, Tag, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import api from "../../utils/api";
import useUserStore from "../../store/useUserStore";
import { Article, Section, CancelButton } from "./productDetail.styles";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUserStore();

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
      message.error(error.response?.data?.message);
    }
  };

  if (isLoading)
    return (
      <Section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
            width: "100%",
          }}
        >
          <Spin size="large">
            <div style={{ padding: "40px" }} />
          </Spin>
        </div>
      </Section>
    );

  if (isError || !product)
    return (
      <Section>
        <h2>Vinyl not found</h2>
        <CancelButton
          onClick={() => navigate("/")}
          style={{ marginTop: "20px" }}
        >
          Back to Home
        </CancelButton>
      </Section>
    );

  return (
    <Section>
      <Article>
        <div className="image-container">
          <img src={product.image} alt={product.album} />
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
            <CancelButton onClick={() => navigate("/")}>Back</CancelButton>
            {user && !user.is_admin && product.stock > 0 && (
              <Button
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
                onClick={handleAddToCart}
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "20px",
                  height: "50px",
                  padding: "0 30px",
                  border: "none",
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </section>
      </Article>
    </Section>
  );
};

export default ProductDetail;
