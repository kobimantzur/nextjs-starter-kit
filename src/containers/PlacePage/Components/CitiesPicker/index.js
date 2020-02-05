import React, { Component } from 'react';
import './index.scss';
import { buildPlaceUrl } from '../../../../services/urlBuilderService';

export default class CitiesPicker extends Component {
  onCityClick = (city) => {
    const targetUrl = buildPlaceUrl(city);
    this.props.push(targetUrl);
  };

  renderCity(city) {
    return (
      <div className="city" key={city._id} onClick={() => this.onCityClick(city)}>
        <div className="city-title">{city.heName}</div>
        <div className="b-image" style={{ backgroundImage: `url(${city.headerImage})` }} />
      </div>
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
