import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { DEFAULT_META_TITLE } from '../src/constants';
import SearchPage from '../src/containers/SearchPage';
class Page extends Component {
  getPageTitle() {
    return DEFAULT_META_TITLE;
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title key="title">{this.getPageTitle()}</title>
        </Head>
        <SearchPage />
      </React.Fragment>
    );
  }
}

export default connect(state => state)(Page);
