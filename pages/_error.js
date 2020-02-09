import React, { Component } from 'react';
import Head from 'next/head';
import ErrorPage from '../src/components/ErrorPage';
class PrivacyPolicy extends Component {
  getPageTitle() {
    return `Not Found | Mapo`;
  }
  getMetaImage() {
    return '';
  }
  getMetaDescription() {
    return `הורידו את האפליקציה וגלו את ההמלצות על המקומות הכי חמים ברחבי העולם.`;
  }
  render() {
    return (
      <div>
        <Head>
          <title key="title">{this.getPageTitle()}</title>
          <meta property="description" key="description" content={this.getMetaDescription()} />
          <meta property="og:title" key="og:title" content={this.getPageTitle()} />
          <meta
            property="og:description"
            key="og:description"
            content={this.getMetaDescription()}
          />
        </Head>
        <ErrorPage />
      </div>
    );
  }
}

export default PrivacyPolicy;
