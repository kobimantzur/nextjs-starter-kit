import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import './index.scss';

const propTypes = {
  business: PropTypes.object,
};

const defaultProps = {
  business: {

  },
};

export default class BusinessReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderStars() {
    const { business } = this.props;
    const names = [{
      key: 'prof',
      value: 'מקצועיות',
    },
    ];
    // if (!business.scale1 || !business.scale2 || !business.scale3 || !business.businessScore) return null;
    const parsedScale1 = parseInt(business.scale1);
    return (
      <React.Fragment>
        <div className="total-score">
          <h1 className="total-score-text">{business.scale1}</h1>
        </div>
        <div className="stars-wrapper">
          <Rate value={parsedScale1} allowHalf disabled />
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="business-review-container">
        {this.renderStars()}
      </div>
    );
  }
}

BusinessReview.propTypes = propTypes;
BusinessReview.defaultProps = defaultProps;
