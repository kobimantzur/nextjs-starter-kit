import React, { Component } from 'react';
import { Tag } from 'antd';
import './index.scss';

export default class Tags extends Component {
  getTags(business) {
    const { subCategoryFilters, subCategories } = business;
    const tags = [];
    if (subCategories && subCategories.length > 0) {
      subCategories.map((subCategory) => {
        tags.push({
          key: subCategory._id,
          value: subCategory.title,
        });

        return subCategory;
      });
    }

    if (subCategoryFilters && subCategoryFilters.length > 0) {
      subCategoryFilters.map((subCategoryFilter) => {
        tags.push({
          key: subCategoryFilter._id,
          value: subCategoryFilter.title,
        });
        return subCategoryFilter;
      });
    }

    return tags;
  }

  render() {
    const { business } = this.props;
    if (!business) return null;

    return (
      <div className="tags">
        {this.getTags(business).map(tag => (
          <Tag key={tag.key}>{tag.value}</Tag>
        ))}
      </div>
    );
  }
}
