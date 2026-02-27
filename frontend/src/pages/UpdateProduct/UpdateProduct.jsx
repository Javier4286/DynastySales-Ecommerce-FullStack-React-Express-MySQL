import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Card,
  Typography,
  message,
  Spin,
  Space,
} from "antd";
import {
  SaveOutlined,
  RollbackOutlined,
  EditOutlined,
} from "@ant-design/icons";
import api from "../../utils/api";
import { UpdateContainer } from "./updateProduct.styles";

const { Title } = Typography;

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          api.get(`/products/detailProduct/${id}`),
          api.get("/products/categories"),
        ]);

        setCategories(catRes.data);

        form.setFieldsValue(prodRes.data);
      } catch (err) {
        message.error("Failed to load product data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, form]);

  const onFinish = async (values) => {
    setSubmitting(true);

    try {
      await api.put(`/products/editProduct/${id}`, values);

      message.success("Product updated successfully");

      navigate("/");
    } catch (err) {
      if (err.response && err.response.data.errors) {
        const backendErrors = err.response.data.errors.map((error) => ({
          name: error.field,
          errors: [error.message],
        }));

        form.setFields(backendErrors);

        console.warn("Backend validation failed:", err.response.data.errors);
      } else {
        message.error(
          err.response?.data?.message || "An unexpected error occurred",
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return (
      <Spin size="large" style={{ display: "block", margin: "100px auto" }} />
    );

  return (
    <UpdateContainer>
      <Card className="update-card">
        <Title level={3}>
          <EditOutlined /> Edit Product
        </Title>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="category_id" label="Category">
            <Select placeholder="Select a category">
              {categories.map((c) => (
                <Select.Option key={c.id} value={c.id}>
                  {c.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <div className="form-grid">
            <Form.Item name="artist" label="Artist">
              <Input size="large" />
            </Form.Item>
            <Form.Item name="album" label="Album Title">
              <Input size="large" />
            </Form.Item>
          </div>

          <div className="stats-grid">
            <Form.Item name="release_year" label="Year">
              <InputNumber
                style={{ width: "100%" }}
                size="large"
                placeholder="YYYY"
              />
            </Form.Item>
            <Form.Item name="price" label="Price">
              <InputNumber prefix="$" style={{ width: "100%" }} size="large" />
            </Form.Item>
            <Form.Item name="stock" label="Stock">
              <InputNumber style={{ width: "100%" }} size="large" />
            </Form.Item>
          </div>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item name="image" label="Image URL">
            <Input
              size="large"
              placeholder="http://localhost:3000/images/..."
            />
          </Form.Item>

          <Space
            style={{ width: "100%", justifyContent: "flex-end", marginTop: 10 }}
          >
            <Button icon={<RollbackOutlined />} onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              loading={submitting}
            >
              Save Changes
            </Button>
          </Space>
        </Form>
      </Card>
    </UpdateContainer>
  );
};

export default UpdateProduct;
