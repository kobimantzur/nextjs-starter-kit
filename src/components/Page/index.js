import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';

const { Content } = Layout;
export default class Page extends Component {
  render() {
    const { className } = this.props;
    return (
      <Content className={`page ${className || ''}`}>
        <div className="header-opacity" />
        {this.props.children}
      </Content>
    );
  }
}
