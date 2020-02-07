import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DownloadPage from '../../src/components/Download';
import Head from 'next/head';

class Business extends Component {
  getPageTitle() {
    return `Mapo | ישראלים מטיילים בחו״ל`;
  }
  getMetaImage() {
    const { business } = this.props;
    if (!business) return '';

    return business.logoUrl;
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
        <DownloadPage />
      </div>
    );
  }
}

export default Business;
