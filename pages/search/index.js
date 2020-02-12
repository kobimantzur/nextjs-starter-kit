import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeachPageContainer from '../../src/containers/SearchPage';
import { getCountries } from '../../src/reducers/Search/actions';
import Head from 'next/head';
import { reportError } from '../../src/services/logService';
class Page extends Component {
  static async getInitialProps({ store, isServer, pathname, query, res }) {
    try {
      const countriesResponse = await store.dispatch(getCountries());
      return { ...countriesResponse }; // you can pass some custom props to component from here
    } catch (e) {
      console.log('reporting error');
      reportError(e);
      // res.redirect('/404');
    }
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
