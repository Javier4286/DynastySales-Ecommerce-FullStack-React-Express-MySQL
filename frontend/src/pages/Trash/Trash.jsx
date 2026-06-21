import { API_BASE_URL } from "../../utils/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Spin, Empty, message, Tooltip, Button } from "antd";
import { ReloadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import useThemeStore from "../../store/useThemeStore";
import { TrashContainer, TrashItem, RestoreButton } from "./trash.styles";

const Trash = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isDarkMode } = useThemeStore();

  const { data: trashedProducts = [], isLoading } = useQuery({
    queryKey: ["products-trashed"],
    queryFn: async () => {
      const { data } = await api.get("/products/trashed");
      return data;
    },
  });

  const restoreMutation = useMutation({
    mutationFn: async (id) => {
      return await api.post(`/products/restore/${id}`);
    },

    onSuccess: () => {
      message.success("Product successfully restored to store");
      queryClient.invalidateQueries(["products-trashed"]);
      queryClient.invalidateQueries(["products"]);
    },

    onError: (error) => {
      const serverMessage =
        error.response?.data?.message ||
        "System error: Could not restore product";
      message.error(serverMessage);
    },
  });

  if (isLoading) {
    return (
      <TrashContainer $isDarkMode={isDarkMode}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "100px",
          }}
        >
          <Spin size="large" />
        </div>
      </TrashContainer>
    );
  }

  return (
    <TrashContainer $isDarkMode={isDarkMode}>
      <div className="header-area">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/")}
          style={{
            fontSize: "18px",
            color: isDarkMode ? "#ffffff" : "#1a1a1a",
          }}
        />
        <h1>Restore Products</h1>
      </div>

      {trashedProducts.length === 0 ? (
        <Empty
          description="The trash is currently empty"
          style={{ marginTop: "60px" }}
        >
          <Button type="link" onClick={() => navigate("/")}>
            Back to Dashboard
          </Button>
        </Empty>
      ) : (
        trashedProducts.map((product) => (
          <TrashItem key={product.id} $isDarkMode={isDarkMode}>
            <img
              className="thumb"
              src={
                product.image.startsWith("http://") ||
                product.image.startsWith("https://")
                  ? product.image
                  : `${API_BASE_URL}${product.image}`
              }
              alt={product.album}
            />
            <div className="info">
              <h2>{product.album}</h2>
              <h3>{product.artist}</h3>
              <span className="price">${product.price}</span>
            </div>
            <div className="actions">
              <Tooltip title="Bring back to Store">
                <RestoreButton
                  icon={<ReloadOutlined />}
                  loading={restoreMutation.isLoading}
                  onClick={() => restoreMutation.mutate(product.id)}
                  $isDarkMode={isDarkMode}
                >
                  Restore
                </RestoreButton>
              </Tooltip>
            </div>
          </TrashItem>
        ))
      )}
    </TrashContainer>
  );
};

export default Trash;
