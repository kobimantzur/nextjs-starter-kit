import React, { Component } from 'react';
import './index.scss';
import { Breadcrumb, Icon } from 'antd';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { buildPlaceUrl, buildSearchUrl } from '../../services/urlBuilderService';
import {reportEvent} from '../../services/analyticsService'

export default class Breadcrumbs extends Component {
  onClick = link => {
    // link && this.props.push(link);
    // TODO: report GA
    // if (!link) return;
    // const {pageName} = link;
    // debugger;
    // reportEvent('Search', pageName)

  };

  render() {
    const { items } = this.props;

    return (
      <Breadcrumb className="breadcrumbs">
        <Breadcrumb.Item href="/">
          <Icon type="home" />
          <span>ראשי</span>
        </Breadcrumb.Item>
        {items.map((item, index) => {
          const additionalProps = {};
          if (item.link) {
            additionalProps.onClick = () => {
              // this.props.push(item.link);
              // TODO: report GA
              reportEvent
            };
          } else {
            additionalProps.className = 'disabled';
          }
          if (item.isHighlighted) {
            additionalProps.className = additionalProps.className
              ? `${additionalProps.className} highlighted`
              : 'highlighted';
          }
          return (
            <Breadcrumb.Item
              {...additionalProps}
              onClick={() => this.onClick(item)}
              key={index}
            >
              {!item.isHighlighted && item.placeObject && item.subCategoryObject && (
                <Link
                  href={buildSearchUrl({
                    placeId: item.placeObject._id,
                    subCategoryId: item.subCategoryObject._id
                  })}
                >
                  <a>{item.title}</a>
                </Link>
              )}
              {!item.isHighlighted && item.placeObject && !item.subCategoryObject && (
                <Link href={buildPlaceUrl(item.placeObject)}><a>{item.title}</a></Link>
              )}
              {(item.isHighlighted || (!item.placeObject && !item.subCategoryObject)) && (
                <span> {item.title}</span>
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  }
}
