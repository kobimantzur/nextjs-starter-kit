import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class UserInfo extends Component {
  render() {
    const { userDetails, additionalSecondaryTitle } = this.props;
    if (!userDetails || !userDetails.firstName) return null;
    const userImage = userDetails.profilePictureUrl || '/public/img/user-avatar.png';
    const userName = `${userDetails.firstName} ${userDetails.lastName}`;
    let secondaryTitle = userDetails.headline || '';
    secondaryTitle += secondaryTitle && additionalSecondaryTitle ? ' | ' : '';
    secondaryTitle += additionalSecondaryTitle || '';
    return (
      <div className="user-info">
        <div className="avatar-wrapper">
          <img src={userImage} className="avatar" alt={userName} />
        </div>
        <div className="user-details">
          <p className="name">{`${userDetails.firstName} ${userDetails.lastName}`}</p>
          {secondaryTitle && <p className="headline">{secondaryTitle}</p>}
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  // userDetails: PropTypes.object,
  additionalSecondaryTitle: PropTypes.string
};
UserInfo.defaultProps = {
  // userDetails: undefined,
  additionalSecondaryTitle: ''
};
