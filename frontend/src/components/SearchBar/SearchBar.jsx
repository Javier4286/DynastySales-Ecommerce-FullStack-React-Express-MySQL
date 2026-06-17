import React from "react";
import { UndoOutlined } from "@ant-design/icons";
import { Select, Input, Checkbox, Button, Radio, InputNumber } from "antd";
import { useState } from "react";
import useSearchBarStore from "../../store/useSearchBarStore";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import {
  Bar,
  StyledSearchIcon,
  GlobalDropdownStyles,
} from "./searchBar.styles";
import useThemeStore from "../../store/useThemeStore";

const { Option } = Select;

const SearchBar = () => {
  const [showPriceFilters, setShowPriceFilters] = useState(false);
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);
  const { searchTerms, setSearchTerms, clearSearchTerms } = useSearchBarStore();
  const { isDarkMode } = useThemeStore();

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

  const hasActiveFilters =
    searchTerms.byArtistOrAlbum ||
    searchTerms.byMinPrice ||
    searchTerms.byMaxPrice ||
    searchTerms.byCategory ||
    searchTerms.bySort ||
    showPriceFilters ||
    showCategoryFilters;

  return (
    <Bar $isDarkMode={isDarkMode}>
      <GlobalDropdownStyles $isDarkMode={isDarkMode} />
      <div className="search-main-row">
        <Input
          className="search-input"
          placeholder="Search by album or artist..."
          prefix={<StyledSearchIcon $isDarkMode={isDarkMode} />}
          value={searchTerms.byArtistOrAlbum}
          onChange={(e) => setSearchTerms({ byArtistOrAlbum: e.target.value })}
          allowClear
        />

        <div className="filter-controls">
          <Checkbox
            className="filter-checkbox"
            checked={showPriceFilters}
            onChange={(e) => setShowPriceFilters(e.target.checked)}
          >
            Price
          </Checkbox>
          <Checkbox
            className="filter-checkbox"
            checked={showCategoryFilters}
            onChange={(e) => setShowCategoryFilters(e.target.checked)}
          >
            Category
          </Checkbox>
        </div>
      </div>

      {(showPriceFilters || showCategoryFilters) && (
        <div className="filters-row">
          {showPriceFilters && (
            <div className="price-filters-space">
              <InputNumber
                placeholder="Min $"
                className="number-input"
                min={0}
                value={searchTerms.byMinPrice || null}
                onChange={(value) => setSearchTerms({ byMinPrice: value })}
              />
              <InputNumber
                placeholder="Max $"
                className="number-input"
                min={0}
                value={searchTerms.byMaxPrice || null}
                onChange={(value) => setSearchTerms({ byMaxPrice: value })}
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
            </div>
          )}
          {showCategoryFilters && (
            <Select
              className="category-select"
              popupClassName="dynasty-select-popup"
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
          {hasActiveFilters && (
            <Button
              type="primary"
              icon={<UndoOutlined />}
              onClick={handleReset}
              danger
              className="reset-btn"
            >
              Reset
            </Button>
          )}
        </div>
      )}
    </Bar>
  );
};

export default SearchBar;
