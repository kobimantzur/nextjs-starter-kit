import React, { Component } from 'react';
import './index.scss';

export default class CardWrap extends Component {
  render() {
    const { className } = this.props;
    return (
      <div {...this.props} className={`card-wrap ${className || ''}`}>
        {this.props.children}
      </div>
    );
  }
}
