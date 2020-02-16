// pages/_app.js
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import createRootReducer from '../src/reducers';
import thunk from 'redux-thunk';

const composeEnhancer = compose;
import Layout from '../src/components/Layout';
import { ConnectedRouter } from 'connected-react-router';
import Head from 'next/head';


const makeStore = (initialState, options) => {
  return createStore(createRootReducer(), initialState, composeEnhancer(applyMiddleware(thunk)));
};

class MyApp extends App {
  getPageDescription() {
    return '';
  }
  getPageTitle() {
    return ``;
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <title key="title">{this.getPageTitle()}</title>
          <meta key="title" property="title" content={this.getPageTitle()} />
          <meta key="description" property="description" content={this.getPageDescription()} />

          <meta key="og:title" property="og:title" content={this.getPageTitle()} />

          <meta
            key="og:description"
            property="og:description"
            content={this.getPageDescription()}
          />


          <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
          <meta
            key="twitter:description"
            name="twitter:description"
            content={this.getPageDescription()}
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
