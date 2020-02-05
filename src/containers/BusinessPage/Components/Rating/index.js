import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import './index.scss';

const propTypes = {
  business: PropTypes.object,
};

const defaultProps = {
  business: {
    businessScore: undefined,
    likes: undefined,
  },
};

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { business: { likes, businessScore, numOfReviews } } = this.props;
    // const parsedScore = parseInt(scale1);
    // const roundedScore = Math.round(parsedScore * 2) / 2;
    if (!numOfReviews) return null;
    return (
      <div className="rating">
           {businessScore && (<div className="stars-wrapper">
              <Rate value={businessScore} allowHalf disabled />
           </div>)}           
        {numOfReviews && numOfReviews > 0 && (
        <h4 className="rec-text">
          {numOfReviews}
          {' '}
המלצות
        </h4>
        )}
      </div>
    );
  }
}

Rating.propTypes = propTypes;
Rating.defaultProps = defaultProps;
