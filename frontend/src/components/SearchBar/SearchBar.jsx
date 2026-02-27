import { SearchOutlined, UndoOutlined } from "@ant-design/icons";
import { Select, Input, Space, Checkbox, Button, Radio } from "antd";
import { useState } from "react";
import useSearchBarStore from "../../store/useSearchBarStore";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { Bar } from "./searchBar.styles";

const { Option } = Select;

const SearchBar = () => {
  const [showPriceFilters, setShowPriceFilters] = useState(false);
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);
  const { searchTerms, setSearchTerms, clearSearchTerms } = useSearchBarStore();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get("/products/categories");
      return data;
    },
  });

  const handleReset = () => {
    clearSearchTerms();
    setShowPriceFilters(false);
    setShowCategoryFilters(false);
  };

  return (
    <Bar>
      <div className="search-main-row">
        <Input
          className="search-input"
          placeholder="What are you looking for today?"
          prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
          value={searchTerms.byArtistOrAlbum}
          onChange={(e) => setSearchTerms({ byArtistOrAlbum: e.target.value })}
          allowClear
        />

        <div className="filter-controls">
          <Space size="middle">
            <Checkbox
              checked={showPriceFilters}
              onChange={(e) => setShowPriceFilters(e.target.checked)}
            >
              Price
            </Checkbox>
            <Checkbox
              checked={showCategoryFilters}
              onChange={(e) => setShowCategoryFilters(e.target.checked)}
            >
              Category
            </Checkbox>
            <Button
              type="text"
              icon={<UndoOutlined />}
              onClick={handleReset}
              danger
            >
              Reset
            </Button>
          </Space>
        </div>
      </div>

      {(showPriceFilters || showCategoryFilters) && (
        <div className="filters-row">
          {showPriceFilters && (
            <Space>
              <Input
                type="number"
                placeholder="Min $"
                className="number-input"
                value={searchTerms.byMinPrice}
                onChange={(e) => setSearchTerms({ byMinPrice: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Max $"
                className="number-input"
                value={searchTerms.byMaxPrice}
                onChange={(e) => setSearchTerms({ byMaxPrice: e.target.value })}
              />
              <Radio.Group
                value={searchTerms.bySort}
                onChange={(e) => setSearchTerms({ bySort: e.target.value })}
                optionType="button"
                buttonStyle="solid"
              >
                <Radio.Button value="asc">Asc</Radio.Button>
                <Radio.Button value="desc">Desc</Radio.Button>
              </Radio.Group>
            </Space>
          )}
          {showCategoryFilters && (
            <Select
              className="category-select"
              placeholder="Select Category"
              value={searchTerms.byCategory || undefined}
              onChange={(value) => setSearchTerms({ byCategory: value })}
              allowClear
            >
              {categories.map((cat) => (
                <Option
                  key={cat.id}
                  value={cat.id}
                  style={{ textAlign: "center" }}
                >
                  {cat.name}
                </Option>
              ))}
            </Select>
          )}
        </div>
      )}
    </Bar>
  );
};

export default SearchBar;
