import React, { Component } from 'react';
import './index.scss';
import { buildPlaceUrl } from '../../../../services/urlBuilderService';

export default class CountryPicker extends Component {
  onCountryClick = (country) => {
    const targetUrl = buildPlaceUrl(country);
    this.props.push(targetUrl);
  };

  renderCountry(country) {
    return (
      <div className="country" key={country._id} onClick={() => this.onCountryClick(country)}>
        <div className="country-title">{country.heName}</div>
        <div className="b-image" style={{ backgroundImage: `url(${country.headerImage})` }} />
      </div>
    );
  }

  render() {
    const { countriesList } = this.props;
    if (!countriesList) return null;
    return (
      <div className="country-picker">
        {countriesList.map(country => this.renderCountry(country))}
      </div>
    );
  }
}
