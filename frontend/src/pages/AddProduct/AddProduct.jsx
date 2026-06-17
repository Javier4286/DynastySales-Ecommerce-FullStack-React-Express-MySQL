import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Form, Input, InputNumber, message, Row, Select } from "antd";
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
  StyledInput,
  StyledInputNumber,
  StyledTextArea,
  DropdownContainer,
  DropdownDivider,
  DropdownInputContainer,
  DropdownAddButton,
  PrefixCurrency,
} from "./addProduct.styles";
import useThemeStore from "../../store/useThemeStore";

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

      if (res.data?.message) {
        message.success(res.data.message);
      }

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

    const allFields = form.getFieldsValue();
    const clearedFields = Object.keys(allFields).map((fieldName) => ({
      name: fieldName,
      errors: [],
    }));
    form.setFields(clearedFields);

    form.setFields(
      backendErrors.map((err) => ({
        name: err.field,
        errors: [err.message],
      })),
    );
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
              const res = await api.post("/products/addProduct", {
                ...values,
                release_year: Number(values.release_year),
                price: Number(values.price),
                stock: Number(values.stock),
              });

              if (res.data?.message) {
                message.success(res.data.message);
              }

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
                <StyledInput
                  $isDarkMode={isDarkMode}
                  size="large"
                  placeholder="Please enter the album title"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Artist" name="artist">
                <StyledInput
                  $isDarkMode={isDarkMode}
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
                  popupClassName="custom-category-dropdown"
                  dropdownClassName="custom-category-dropdown"
                  dropdownRender={(menu) => (
                    <DropdownContainer $isDarkMode={isDarkMode}>
                      {menu}
                      <DropdownDivider $isDarkMode={isDarkMode} />
                      <DropdownInputContainer>
                        <StyledInput
                          ref={inputRef}
                          value={newCategoryName}
                          onChange={(e) => setNewCategoryName(e.target.value)}
                          placeholder="New category"
                          $isDarkMode={isDarkMode}
                        />
                        <DropdownAddButton
                          $isDarkMode={isDarkMode}
                          type="text"
                          icon={<PlusOutlined />}
                          onClick={addItem}
                        >
                          Add
                        </DropdownAddButton>
                      </DropdownInputContainer>
                    </DropdownContainer>
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Release Year" name="release_year">
                <StyledInputNumber
                  $isDarkMode={isDarkMode}
                  size="large"
                  placeholder="Please enter the release year"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 0]}>
            <Col xs={12} md={8}>
              <Form.Item label="Price" name="price">
                <StyledInputNumber
                  $isDarkMode={isDarkMode}
                  prefix={
                    <PrefixCurrency $isDarkMode={isDarkMode}>$</PrefixCurrency>
                  }
                  size="large"
                  placeholder="Please enter the price"
                />
              </Form.Item>
            </Col>
            <Col xs={12} md={8}>
              <Form.Item label="Stock" name="stock">
                <StyledInputNumber
                  $isDarkMode={isDarkMode}
                  size="large"
                  placeholder="Please enter the stock"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item label="Image URL" name="image">
                <StyledInput
                  $isDarkMode={isDarkMode}
                  size="large"
                  placeholder="Please enter the image URL"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Description" name="description">
            <StyledTextArea
              $isDarkMode={isDarkMode}
              rows={4}
              placeholder="Please enter the product description"
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
