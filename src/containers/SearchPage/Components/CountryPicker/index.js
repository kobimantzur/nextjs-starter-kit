import React, { Component } from 'react';
import './index.scss';
import { buildPlaceUrl } from '../../../../services/urlBuilderService';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { isMobile } from '../../../../services/commonService';

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
          <LazyLoad height={isMobile() ? 150 : 300}>
            <div className="b-image" style={{ backgroundImage: `url(${country.headerImage})` }} />
          </LazyLoad>
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
