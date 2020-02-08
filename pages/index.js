import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeachPageContainer from '../src/containers/SearchPage';
import { getCountries } from '../src/reducers/Search/actions';
import Head from 'next/head';
import About from '../src/components/About';
class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title key="title">Mapo | ישראלים מטיילים בחו״ל</title>
        </Head>
        <About />
        
      </React.Fragment>
    );
  }
}

export default connect(state => state)(Page);
