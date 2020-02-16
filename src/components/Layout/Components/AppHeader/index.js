import { Layout as AntLayout, Drawer, Button } from 'antd';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import './index.scss';
import {DEFAULT_APP_NAME} from '../../../../constants'

const { Header } = AntLayout;

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  render() {

    return (
      <Header className="header">
        <div className="right">
        </div>
        <div className="left">
          <a href="/">
            <img alt={DEFAULT_APP_NAME} className="logo" src={'/'} />
          </a>
        </div>
      </Header>
    );
  }
}
const mapStateToProps = ({ SearchReducer }) => {
  const {  isLoading } = SearchReducer;
  return {
    isLoading,
  };
};
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
