import React, { Component } from 'react';
import './index.scss';

export default class Content extends Component {
  render() {
    return <div className="content">{this.props.children}</div>;
  }
}
