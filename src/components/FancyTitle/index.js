import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

export default class FancyTitle extends Component {
  render() {
    const { highlightedTitle, regularTitle } = this.props;
    return (
      <div className="fancy-title">
        <h1>
          {regularTitle && <span className="regular-title">{regularTitle}</span>}
          {highlightedTitle}
        </h1>
        <div className="header-color" />
      </div>
    );
  }
}

FancyTitle.propTypes = {
  highlightedTitle: PropTypes.string,
  regularTitle: PropTypes.string,
};
FancyTitle.defaultProps = {
  highlightedTitle: '',
  regularTitle: '',
};
