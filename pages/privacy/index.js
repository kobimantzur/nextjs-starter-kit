import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DownloadPage from '../../src/components/Download';
import Head from 'next/head';
import PrivacyPolicyComponent from '../../src/components/PrivacyPolicy';
class PrivacyPolicy extends Component {
  getPageTitle() {
    return `Mapo | מדיניות הפרטיות`;
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
        <PrivacyPolicyComponent />
      </div>
    );
  }
}

export default PrivacyPolicy;
