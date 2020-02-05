import React, { Component } from 'react';
import './index.scss';

export default class CountryHeader extends Component {
  render() {
    const { selectedPlace } = this.props;
    if (!selectedPlace) return null;

    const headerTitle = `${selectedPlace.heName}: כל המידע שאתם צריכים`;

    return (
      <div className="country-header">
        <h1>{headerTitle}</h1>
        {/* <div
          className="b-overlay"
          style={{ backgroundImage: `url(${selectedPlace.headerImage})` }}
        /> */}
      </div>
    );
  }
}
