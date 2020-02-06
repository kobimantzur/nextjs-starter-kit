import React, { Component } from 'react';
import './index.scss';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { buildBusinesUrl } from '../../services/urlBuilderService';
import UserInfo from '../UserInfo';
import { getFriendlyTime } from '../../services/commonService';
import BusinessListViewContentLoader from '../contentLoaders/BusinessListViewContentLoader';

export default class BusinessListView extends Component {
  renderBusiness(business) {
    const { logoUrl, englishName, _id } = business;
    return (
      <Link key={_id} href={buildBusinesUrl(business)}>
        <a className="business">
          <div className="right">
            {logoUrl && <div className="logo-img" style={{ backgroundImage: `url(${logoUrl})` }} />}
          </div>
          <div className="center">
            <div className="business-title">{englishName}</div>
            <UserInfo userDetails={business.userId} />
          </div>
        </a>
      </Link>
    );
  }

  renderLoader() {
    return (
      <div className="business-list-view">
        <BusinessListViewContentLoader {...this.props} />
      </div>
    );
  }

  renderNoResults() {
    return (
      <div className="business-list-view no-results">
        <h2>לא נמצאו תוצאות</h2>

        <img src="/static/img/noresults.svg" alt="לא נמצאו תוצאות" />
        {/* No Results */}
        {/* sdlkasld */}
      </div>
    );
  }

  render() {
    const { isLoading, businessList } = this.props;
    if (isLoading) return this.renderLoader();
    if (!businessList || businessList.length === 0) return this.renderNoResults();
    return (
      <div className="business-list-view">
        {businessList.map(business => this.renderBusiness(business))}
      </div>
    );
  }
}
