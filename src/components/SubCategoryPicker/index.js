import React, { Component } from 'react';
import './index.scss';
import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';
import { buildSearchUrl } from '../../services/urlBuilderService';

export default class SubCategoryPicker extends Component {
  onClick = (subCategory) => {
    const { selectedPlace } = this.props;

    this.props.navigateSearchBySubCategory(selectedPlace, subCategory);
  };

  renderSubCategory(subCategory) {
    const { selectedPlace } = this.props;
    if (!selectedPlace) return null;
    return (
      <Link
        key={subCategory._id}
        className="sub-category"
        to={buildSearchUrl({
          placeId: selectedPlace._id,
          subCategoryId: subCategory._id,
        })}
      >
        {subCategory.title}
      </Link>
    );
  }

  renderHiddenCategories(hiddenCategories) {
    const { selectedPlace } = this.props;
    if (!selectedPlace) return null;
    const MenuComponent = (
      <Menu>
        {hiddenCategories.map(category => (
          <Menu.Item key={category._id}>
            <Link
              rel="noopener noreferrer"
              to={buildSearchUrl({
                placeId: selectedPlace._id,
                subCategoryId: category._id,
              })}
            >
              {category.title}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <Dropdown overlay={MenuComponent} placement="bottomLeft">
        <Button className="more-button">
          <i className="fas fa-ellipsis-h" />
        </Button>
      </Dropdown>

    // <Dropdown overlay={MenuComponent} placement="bottomLeft" className="hidden-categories">
    //   Hidden Button
    // </Dropdown>
    );
  }

  render() {
    const { subCategoriesList } = this.props;
    if (!subCategoriesList || subCategoriesList.length === 0) return null;

    const shownCategories = subCategoriesList.slice(0, 9);
    const hiddenCategories = subCategoriesList.slice(9, subCategoriesList.length);
    return (
      <div className="sub-category-picker">
        {/* <h2>בחרו קטגוריה</h2> */}
        {shownCategories.map(subCategory => this.renderSubCategory(subCategory))}
        {this.renderHiddenCategories(hiddenCategories)}
      </div>
    );
  }
}
