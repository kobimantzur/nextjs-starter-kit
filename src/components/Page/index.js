import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';

const { Content } = Layout;
export default class Page extends Component {
  render() {
    const { className } = this.props;
    return (
      <Content className={`page ${className || ''}`}>
        {this.props.children}
      </Content>
    );
  }
}
