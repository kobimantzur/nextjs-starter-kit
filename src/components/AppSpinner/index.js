import React, { Component } from 'react';
import './index.scss';
import { Spin, Icon } from 'antd';

export default class AppSpinner extends Component {
  render() {
    return (
      <div className="app-spinner">
        <img src="/static/img/logos/icon-blue.svg" className="app-icon" />
        <Icon type="loading" spin />
      </div>
    );
  }
}
