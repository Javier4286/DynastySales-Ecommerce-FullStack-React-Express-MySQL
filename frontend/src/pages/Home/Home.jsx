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
import BackToTop from "../../components/BackToTop/BackToTop";

const Home = () => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();
  const { searchTerms } = useSearchBarStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", searchTerms],
    queryFn: async () => {
      const { data } = await api.get("/products", { params: searchTerms });
      return data;
    },
  });

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          width: "100%",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Section>
      {products.length === 0 ? (
        <div
          style={{ width: "100%", gridColumn: "1 / -1", padding: "100px 0" }}
        >
          <Empty description="No products found" />
        </div>
      ) : (
        products.map((product) => (
          <article key={product.id}>
            <img
              className="album-cover"
              src={product.image}
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
