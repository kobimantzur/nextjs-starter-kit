import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Card, Button,
} from 'antd';
import './index.scss';
import classnames from 'classnames';
import UserAvatar from '../../../../img/user-avatar.png';
import { getFriendlyTime } from '../../../../services/commonService';

const propTypes = {
  business: PropTypes.object,
};

const defaultProps = {
  business: {
    reviewsList: [],
  },
};

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCommentHeader = (comment) => {
    const { userId, createdAt } = comment;
    const userFullName = `${userId.firstName} ${userId.lastName}`;
    return (
      <Row className="comment-header">
        <div className="right">
          <span className="time">{getFriendlyTime(createdAt)}</span>
        </div>
        <div className="left">
          <img src={userId.profilePictureUrl || UserAvatar} alt={userFullName} />
          <h4>{userFullName}</h4>
        </div>
      </Row>
    );
  };

  renderCommentBody = (review) => {
    const { comment } = review;
    return (
      <Row>
        <p className="comment-text">{comment}</p>
      </Row>
    );
  };

  renderAddButton() {
    return (
      <Button className="add-comment" onClick={this.props.onAddClick}>
        הוסף המלצה
      </Button>
    );
  }

  render() {
    const { business } = this.props;
    if (!business) return null;
    const { reviewsList, userReview } = business;
    let mergedReviewsList = reviewsList;
    let isReviewed = false;
    if (userReview) {
      isReviewed = true;
      mergedReviewsList = [...[userReview], ...reviewsList.filter(x => x._id !== userReview._id)];
    }
    return (
      <div className="comments-container">
        <div className={classnames('comments-header', { 'has-review': isReviewed })}>
          {/* {!userReview && (this.renderAddButton())} */}
          <h4 className="rec-text">{`${business.numOfReviews} תגובות`}</h4>
        </div>
        {mergedReviewsList.map(comment => (
          <Card
            key={comment._id}
            className={classnames('comment', {
              user: comment._id === (userReview ? userReview._id : ''),
            })}
          >
            {this.renderCommentHeader(comment)}
            {this.renderCommentBody(comment)}
          </Card>
        ))}
      </div>
    );
  }
}

Comments.propTypes = propTypes;
Comments.defaultProps = defaultProps;
