import React, { Component } from 'react';
import './index.scss';
import { buildPlaceUrl } from '../../../../services/urlBuilderService';
import Link from 'next/link';

export default class CitiesPicker extends Component {
  renderCity(city) {
    return (
      <Link key={city._id} href={buildPlaceUrl(city)}>
        <a className="city">
          <div className="city-title">{city.heName}</div>
          <div className="b-image" style={{ backgroundImage: `url(${city.headerImage})` }} />
        </a>
      </Link>
    );
  }

  render() {
    const { citiesList } = this.props;
    if (!citiesList || citiesList.length === 0) return null;
    return (
      <div className="city-picker">
        <div className="picker-title">בחרו עיר</div>
        <div className="cities-wrapper">{citiesList.map(city => this.renderCity(city))}</div>
      </div>
    );
  }
}
