import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {  Content, Page, AppSpinner } from '../../components';

class SearchPage extends Component {
  render() {
    return (
      <Page className="home-page">
        <Content>
              <div>Completed loading!</div>
        </Content>
      </Page>
    );
  }
}
const mapStateToProps = ({ SearchReducer }) => {
  const { isLoading } = SearchReducer;
  return {
    isLoading,
  };
};
const mapDispatchToProps = {
  push
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
