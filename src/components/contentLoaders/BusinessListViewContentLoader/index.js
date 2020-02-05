import React, { Component } from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';
import './index.scss';

export default class BusinessListViewContentLoader extends Component {
  render() {
    return (
      <div className="business-list-view-content-loader">
        <ContentLoader viewBox="0 0 380 80">
          {/* Only SVG shapes */}
          <rect x="90" y="15" rx="4" ry="4" width="200" height="8" />
          <rect x="90" y="40" rx="3" ry="3" width="200" height="8" />
          <rect x="300" y="0" rx="5" ry="5" width="80" height="80" />
        </ContentLoader>
        <ContentLoader viewBox="0 0 380 80">
          {/* Only SVG shapes */}
          <rect x="90" y="15" rx="4" ry="4" width="200" height="8" />
          <rect x="90" y="40" rx="3" ry="3" width="200" height="8" />
          <rect x="300" y="0" rx="5" ry="5" width="80" height="80" />
        </ContentLoader>
        <ContentLoader viewBox="0 0 380 80">
          {/* Only SVG shapes */}
          <rect x="90" y="15" rx="4" ry="4" width="200" height="8" />
          <rect x="90" y="40" rx="3" ry="3" width="200" height="8" />
          <rect x="300" y="0" rx="5" ry="5" width="80" height="80" />
        </ContentLoader>
      </div>
    );
  }
}
