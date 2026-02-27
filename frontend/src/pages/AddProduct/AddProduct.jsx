import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Divider,
  Button,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import api from "../../utils/api";
import {
  AddProductContainer,
  CenteredTitle,
  StyledButton,
  StyledCard,
  CancelButton,
} from "./addProduct.styles";

const { TextArea } = Input;

const AddProduct = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const inputRef = useRef(null);

  const getCategories = async () => {
    try {
      const res = await api.get("/products/categories");

      setCategories(
        res.data.map((cat) => ({
          label: cat.name,
          value: cat.id,
        })),
      );
    } catch {
      message.error("Error fetching categories");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const addItem = async (e) => {
    e.preventDefault();

    if (!newCategoryName.trim()) return;

    try {
      const res = await api.post("/products/categories/addCategory", {
        name: newCategoryName,
      });

      message.success("Category added");

      await getCategories();

      form.setFieldsValue({ category_id: res.data.data.id });

      setNewCategoryName("");

      setTimeout(() => inputRef.current?.focus(), 0);
    } catch (error) {
      const backendErrors = error?.response?.data?.errors;

      if (backendErrors) {
        backendErrors.forEach((err) => message.error(err.message));
      } else {
        message.error("Error adding category");
      }
    }
  };

  const handleBackendErrors = (error) => {
    const backendErrors = error?.response?.data?.errors;

    if (!backendErrors) {
      message.error("Unexpected error");
      return;
    }

    form.setFields(
      backendErrors.map((err) => ({
        name: err.field,
        errors: [err.message],
      })),
    );

    backendErrors.forEach((err) => message.error(err.message));
  };

  return (
    <AddProductContainer>
      <StyledCard
        title={<CenteredTitle level={2}>Create New Product</CenteredTitle>}
        bordered={false}
      >
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={async (values) => {
            setLoading(true);
            try {
              await api.post("/products/addProduct", {
                ...values,
                release_year: Number(values.release_year),
                price: Number(values.price),
                stock: Number(values.stock),
              });

              message.success("Product created successfully");

              navigate("/");
            } catch (error) {
              handleBackendErrors(error);
            } finally {
              setLoading(false);
            }
          }}
        >
          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item label="Album Title" name="album">
                <Input
                  size="large"
                  placeholder="Please enter the album title"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Artist" name="artist">
                <Input
                  size="large"
                  placeholder="Please enter the artist name"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={24} md={12}>
              <Form.Item label="Category" name="category_id">
                <Select
                  size="large"
                  options={categories}
                  placeholder="Please select a category"
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      <Divider style={{ margin: "8px 0" }} />
                      <Space style={{ padding: "0 8px 4px" }}>
                        <Input
                          ref={inputRef}
                          value={newCategoryName}
                          onChange={(e) => setNewCategoryName(e.target.value)}
                          placeholder="New category"
                        />
                        <Button
                          type="text"
                          icon={<PlusOutlined />}
                          onClick={addItem}
                          style={{ fontWeight: 600, color: "#1a1a1a" }}
                        >
                          Add
                        </Button>
                      </Space>
                    </>
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Release Year" name="release_year">
                <InputNumber
                  style={{ width: "100%" }}
                  size="large"
                  placeholder="Please enter the release year"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={12} md={8}>
              <Form.Item label="Price" name="price">
                <InputNumber
                  prefix="$"
                  style={{ width: "100%" }}
                  size="large"
                  placeholder="Please enter the price"
                />
              </Form.Item>
            </Col>
            <Col xs={12} md={8}>
              <Form.Item label="Stock" name="stock">
                <InputNumber
                  style={{ width: "100%" }}
                  size="large"
                  placeholder="Please enter the stock"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Image URL" name="image">
                <Input size="large" placeholder="Please enter the image URL" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Description" name="description">
            <TextArea
              rows={4}
              placeholder="Please enter the product description"
              style={{ borderRadius: "8px" }}
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 20, marginBottom: 0 }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <CancelButton block onClick={() => navigate("/")}>
                  Cancel
                </CancelButton>
              </Col>
              <Col xs={24} sm={12}>
                <StyledButton
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                >
                  Create Product
                </StyledButton>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </StyledCard>
    </AddProductContainer>
  );
};

export default AddProduct;
