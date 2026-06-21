import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Spin, Empty, message, Tooltip } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
  InfoCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import Section from "./home.styles";
import api from "../../utils/api";
import useUserStore from "../../store/useUserStore";
import useCartStore from "../../store/useCartStore";
import useSearchBarStore from "../../store/useSearchBarStore";
import useThemeStore from "../../store/useThemeStore";
import BackToTop from "../../components/BackToTop/BackToTop";

const Home = () => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();
  const { searchTerms } = useSearchBarStore();
  const { isDarkMode } = useThemeStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [showCloudWarn, setShowCloudWarn] = useState(false);

  const isExternalEnv =
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1";

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", searchTerms],
    queryFn: async () => {
      const { data } = await api.get("/products", { params: searchTerms });
      return data;
    },
  });

  useEffect(() => {
    if (isExternalEnv && (isLoading || products.length === 0)) {
      setShowCloudWarn(true);
    } else {
      setShowCloudWarn(false);
    }
  }, [isLoading, products.length, isExternalEnv]);

  const handleCart = async (product) => {
    if (!user) return message.warning("Please log in to add items");

    const result = await addToCart(user.id, product);

    if (result.success) {
      message.success(`${product.album} added to cart`);
    } else {
      message.error(result.message);
    }
  };

  const handleDelete = async (product) => {
    if (window.confirm(`Are you sure you want to disable ${product.album}?`)) {
      try {
        await api.delete(`/products/${product.id}`);
        message.success("Product moved to trash");
        queryClient.invalidateQueries(["products"]);
      } catch (error) {
        message.error("Error disabling product");
      }
    }
  };

  if (isLoading) {
    return (
      <Section $isDarkMode={isDarkMode}>
        <div className="loader-container">
          <Spin size="large" />
          {showCloudWarn && (
            <div className="cloud-warn-banner">
              <WarningOutlined className="warn-icon" />
              <div className="warn-text">
                Connecting to free-tier cloud hosting (Render). The initial
                request may take a few seconds to spin up the server.
              </div>
            </div>
          )}
        </div>
      </Section>
    );
  }

  return (
    <Section $isDarkMode={isDarkMode}>
      {products.length === 0 ? (
        <div className="empty-container">
          {showCloudWarn && (
            <div className="cloud-warn-banner" style={{ marginBottom: "20px" }}>
              <WarningOutlined className="warn-icon" />
              <div className="warn-text">
                Connecting to free-tier cloud hosting (Render). The initial
                request may take a few seconds to spin up the server.
              </div>
            </div>
          )}
          <Empty description="No products found" />
        </div>
      ) : (
        products.map((product) => (
          <article key={product.id}>
            <img
              className="album-cover"
              src={
                product.image.startsWith("http://") ||
                product.image.startsWith("https://")
                  ? product.image
                  : `${API_BASE_URL}${product.image}`
              }
              alt={product.album}
            />
            <h1>{product.album}</h1>
            <h3>{product.artist}</h3>
            <div className="price-tag">${product.price}</div>
            <div className="actions-container">
              {!user || !user.is_admin ? (
                <>
                  <Tooltip title="Details">
                    <InfoCircleOutlined
                      onClick={() => navigate(`/detailProduct/${product.id}`)}
                    />
                  </Tooltip>
                  {user &&
                    (product.stock >= 1 ? (
                      <Tooltip title="Add to Cart">
                        <ShoppingCartOutlined
                          onClick={() => handleCart(product)}
                        />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Out of stock">
                        <WarningOutlined style={{ color: "orange" }} />
                      </Tooltip>
                    ))}
                </>
              ) : (
                <>
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate(`/editProduct/${product.id}`)}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteOutlined onClick={() => handleDelete(product)} />
                  </Tooltip>
                </>
              )}
            </div>
          </article>
        ))
      )}
      <BackToTop />
    </Section>
  );
};

export default Home;
