import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!navigator) return;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let nextUrl;
    if (/android/i.test(userAgent)) {
      nextUrl = 'http://play.google.com/store/apps/details?id=com.avartii.app';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      nextUrl = 'https://itunes.apple.com/us/app/avartii/id1329505993';
    } else {
      nextUrl = window.location.origin;
    }
    if (nextUrl) {
      window.location.href = nextUrl;
    }
  }

  render() {
    return (
      <div />
    );
  }
}

Download.propTypes = propTypes;
Download.defaultProps = defaultProps;
