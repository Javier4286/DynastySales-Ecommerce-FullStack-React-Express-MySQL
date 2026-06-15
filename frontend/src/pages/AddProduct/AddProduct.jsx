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
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import api from "../../utils/api";
import {
  AddProductContainer,
  CenteredTitle,
  StyledButton,
  StyledCard,
  CancelButton,
  FormActionsContainer,
  SelectDropdownStyles,
} from "./addProduct.styles";
import useThemeStore from "../../store/useThemeStore";

const { TextArea } = Input;

const AddProduct = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const inputRef = useRef(null);
  const { isDarkMode } = useThemeStore();

  const getCategories = async () => {
    try {
      const res = await api.get("/products/categories");

      setCategories(
        res.data.map((cat) => ({
          label: cat.name,
          value: cat.id,
        })),
      );
    } catch (error) {
      error.response?.data?.errors?.forEach((err) =>
        message.error(err.message),
      );
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
      error.response?.data?.errors?.forEach((err) =>
        message.error(err.message),
      );
    }
  };

  const handleBackendErrors = (error) => {
    const backendErrors = error?.response?.data?.errors || [];

    form.setFields(
      backendErrors.map((err) => ({
        name: err.field,
        errors: [err.message],
      })),
    );
  };

  const inputThemeStyles = {
    backgroundColor: isDarkMode ? "#2c2c2c" : "#ffffff",
    borderColor: isDarkMode ? "#434343" : "#d9d9d9",
    color: isDarkMode ? "#ffffff" : "rgba(0, 0, 0, 0.88)",
  };

  return (
    <AddProductContainer $isDarkMode={isDarkMode}>
      <SelectDropdownStyles $isDarkMode={isDarkMode} />
      <StyledCard
        $isDarkMode={isDarkMode}
        title={
          <CenteredTitle level={2} $isDarkMode={isDarkMode}>
            Create New Product
          </CenteredTitle>
        }
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
                  style={inputThemeStyles}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Artist" name="artist">
                <Input
                  size="large"
                  placeholder="Please enter the artist name"
                  style={inputThemeStyles}
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
                  popupClassName="custom-category-dropdown"
                  dropdownClassName="custom-category-dropdown"
                  dropdownStyle={{
                    backgroundColor: isDarkMode ? "#1f1f1f" : "#ffffff",
                  }}
                  dropdownRender={(menu) => (
                    <div
                      style={{
                        backgroundColor: isDarkMode ? "#1f1f1f" : "#ffffff",
                      }}
                    >
                      {menu}
                      <Divider
                        style={{
                          margin: "8px 0",
                          borderColor: isDarkMode ? "#434343" : "#f0f0f0",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          padding: "0 8px 4px",
                        }}
                      >
                        <Input
                          ref={inputRef}
                          value={newCategoryName}
                          onChange={(e) => setNewCategoryName(e.target.value)}
                          placeholder="New category"
                          style={{
                            backgroundColor: isDarkMode ? "#2c2c2c" : "#ffffff",
                            borderColor: isDarkMode ? "#434343" : "#d9d9d9",
                            color: isDarkMode
                              ? "#ffffff"
                              : "rgba(0, 0, 0, 0.88)",
                          }}
                        />
                        <Button
                          type="text"
                          icon={<PlusOutlined />}
                          onClick={addItem}
                          style={{
                            fontWeight: 600,
                            color: isDarkMode ? "#1890ff" : "#1a1a1a",
                          }}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Release Year" name="release_year">
                <InputNumber
                  style={{ width: "100%", ...inputThemeStyles }}
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
                  prefix={
                    <span
                      style={{
                        color: isDarkMode ? "#8c8c8c" : "rgba(0, 0, 0, 0.45)",
                      }}
                    >
                      $
                    </span>
                  }
                  style={{ width: "100%", ...inputThemeStyles }}
                  size="large"
                  placeholder="Please enter the price"
                />
              </Form.Item>
            </Col>
            <Col xs={12} md={8}>
              <Form.Item label="Stock" name="stock">
                <InputNumber
                  style={{ width: "100%", ...inputThemeStyles }}
                  size="large"
                  placeholder="Please enter the stock"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Image URL" name="image">
                <Input
                  size="large"
                  placeholder="Please enter the image URL"
                  style={inputThemeStyles}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Description" name="description">
            <TextArea
              rows={4}
              placeholder="Please enter the product description"
              style={{ ...inputThemeStyles, borderRadius: "8px" }}
            />
          </Form.Item>

          <FormActionsContainer>
            <CancelButton
              $isDarkMode={isDarkMode}
              onClick={() => navigate("/")}
            >
              Cancel
            </CancelButton>
            <StyledButton
              $isDarkMode={isDarkMode}
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Create Product
            </StyledButton>
          </FormActionsContainer>
        </Form>
      </StyledCard>
    </AddProductContainer>
  );
};

export default AddProduct;
