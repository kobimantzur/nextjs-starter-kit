import React, { Component } from 'react';
import Head from 'next/head';

import { DEFAULT_META_DESCRIPTION } from '../src/constants';
import { DEFAULT_META_IMAGE } from '../src/constants';
import { DEFAULT_META_TITLE } from '../src/constants';
class PageNotFound extends Component {
  getPageTitle() {
    return `${DEFAULT_META_TITLE} | Page Not Found`;
  }
  getMetaImage() {
    return DEFAULT_META_IMAGE;
  }
  getMetaDescription() {
    return DEFAULT_META_DESCRIPTION;
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
      </div>
    );
  }
}

export default PageNotFound;
