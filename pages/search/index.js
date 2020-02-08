import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeachPageContainer from '../../src/containers/SearchPage';
import { getCountries } from '../../src/reducers/Search/actions';
import Head from 'next/head';
class Page extends Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    const res = await store.dispatch(getCountries());
    return { ...res }; // you can pass some custom props to component from here
  }
  render() {
    return (
      <div>
        <Head>
          <title key="title">Mapo | ישראלים מטיילים בחו״ל</title>
        </Head>
        <SeachPageContainer {...this.props} />
      </div>
    );
  }
}

export default connect(state => state)(Page);
