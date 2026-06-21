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
import useThemeStore from "../../store/useThemeStore";
import { UpdateContainer, SelectDropdownStyles } from "./updateProduct.styles";

const { Title } = Typography;

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useThemeStore();

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

        form.setFieldsValue({
          ...prodRes.data,
          category_id: Number(prodRes.data.category_id),
          release_year: Number(prodRes.data.release_year),
          price: Number(prodRes.data.price),
          stock: Number(prodRes.data.stock),
        });
      } catch (err) {
        message.error(err.response?.data?.message || "Error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, form]);

  const onFinish = async (values) => {
    setSubmitting(true);

    try {
      const response = await api.put(`/products/editProduct/${id}`, values);

      message.success(response.data?.message || "Product updated successfully");

      navigate("/");
    } catch (err) {
      if (err.response?.data?.errors) {
        form.setFields(
          err.response.data.errors.map((e) => ({
            name: e.field,
            errors: [e.message],
          })),
        );
      } else {
        message.error(err.response?.data?.message || "Error");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SelectDropdownStyles />

      <UpdateContainer $isDarkMode={isDarkMode}>
        <Card className="update-card" bordered={false}>
          <Spin spinning={loading}>
            <Title level={3} className="update-title">
              <EditOutlined /> Edit Product
            </Title>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="category_id"
                label="Category"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select"
                  popupClassName={
                    isDarkMode
                      ? "category-dropdown-dark"
                      : "category-dropdown-light"
                  }
                >
                  {categories.map((c) => (
                    <Select.Option key={c.id} value={c.id}>
                      {c.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <div className="form-grid">
                <Form.Item
                  name="artist"
                  label="Artist"
                  rules={[{ required: true }]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="album"
                  label="Album Title"
                  rules={[{ required: true }]}
                >
                  <Input size="large" />
                </Form.Item>
              </div>

              <div className="stats-grid">
                <Form.Item
                  name="release_year"
                  label="Year"
                  rules={[{ required: true }]}
                >
                  <InputNumber className="full-width" size="large" controls />
                </Form.Item>

                <Form.Item
                  name="price"
                  label="Price"
                  rules={[{ required: true }]}
                >
                  <InputNumber
                    className="full-width"
                    size="large"
                    controls
                    min={0}
                    precision={2}
                  />
                </Form.Item>

                <Form.Item
                  name="stock"
                  label="Stock"
                  rules={[{ required: true }]}
                >
                  <InputNumber
                    className="full-width"
                    size="large"
                    controls
                    min={0}
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>

              <Form.Item
                name="image"
                label="Image URL"
                rules={[{ required: true }]}
              >
                <Input size="large" />
              </Form.Item>

              <Space className="actions-space">
                <Button
                  icon={<RollbackOutlined />}
                  onClick={() => navigate("/")}
                  className="cancel-btn"
                >
                  Cancel
                </Button>

                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SaveOutlined />}
                  loading={submitting}
                  className="save-btn"
                >
                  Save Changes
                </Button>
              </Space>
            </Form>
          </Spin>
        </Card>
      </UpdateContainer>
    </>
  );
};

export default UpdateProduct;
