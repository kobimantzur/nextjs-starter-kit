import React, { Component } from 'react';
import './index.scss';
import { Spin, Icon } from 'antd';
import blueIcon from '../../img/logos/icon-blue.svg';

export default class AppSpinner extends Component {
  render() {
    return (
      <div className="app-spinner">
        <img src={blueIcon} className="app-icon" />
        <Icon type="loading" spin />
      </div>
    );
  }
}
