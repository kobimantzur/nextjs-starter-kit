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
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
  return createStore(createRootReducer(), initialState, composeEnhancer(applyMiddleware(thunk)));
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    ctx.store.dispatch({ type: 'FOO', payload: 'foo' });

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }
  getPageDescription() {
    return `גלו את ההמלצות הכי חמות שיהפכו את הטיול הבא שלכם לבלתי נשכח`;
  }
  getPageTitle() {
    return `Mapo | מטיילים ממליצים בחו״ל`;
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
        <meta key="title" property="title" content={this.getPageTitle()} />
          <meta key="description" property="description" content={this.getPageDescription()} />

          <meta key="og:title" property="og:title" content={this.getPageTitle()} />
          <meta key="og:image" property="og:image" content="https://www.mymapo.com/static/img/meta/wide-share.jpg" />
          <meta key="og:description" property="og:description" content={this.getPageDescription()} />
          <meta key="fb:app_id" property="fb:app_id" content="291124068055220" />

          <meta key="twitter:image:src" property="twitter:image:src" content="https://www.mymapo.com/static/img/meta/wide-share.jpg" />
          <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
          <meta key="twitter:description" name="twitter:description" content={this.getPageDescription()} />
          <meta key="keywords" name="keywords" content={`mapo, מאפו, מטיילים, ויזה לארצות הברית, המלצות, חול`} />

          <meta name="apple-itunes-app" content="app-id=1329505993" />
          <link href="ios-app://1329505993" rel="alternate" />
          <meta property="al:ios:app_name" content="Mapo" />
          <meta property="al:ios:app_store_id" content="1329505993" />
          <meta property="al:ios:url" content="https://www.mymapo.com/" />
          <link href="android-app://com.avartii.app" rel="alternate" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
