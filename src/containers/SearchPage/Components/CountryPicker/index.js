import React, { Component } from 'react';
import './index.scss';
import { buildPlaceUrl } from '../../../../services/urlBuilderService';
import Link from 'next/link';
export default class CountryPicker extends Component {
  onCountryClick = country => {
    const targetUrl = buildPlaceUrl(country);
    this.props.push(targetUrl);
  };

  renderCountry(country) {
    return (
      <Link href={buildPlaceUrl(country)} key={country._id}>
        <a className="country">
          <div className="country-title">{country.heName}</div>
          <div className="b-image" style={{ backgroundImage: `url(${country.headerImage})` }} />
        </a>
      </Link>
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
