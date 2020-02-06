import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BusinessPage from '../../../src/containers/BusinessPage';
import {
  fetchBusinessByFriendlyUrl,
  getBusinessByFriendlyUrl
} from '../../../src/reducers/BusinessPage/actions';
import Head from 'next/head';
import { DEFAULT_PAGE_TITLE } from '../../../src/constants';

class Business extends Component {
  static async getInitialProps({ store, isServer, pathname, query, ctx }) {
    const { businessId } = query;
    try {
      const res = await store.dispatch(getBusinessByFriendlyUrl(businessId));

      return { ...res };
    } catch (e) {}
    return {};
  }
  getPageTitle() {
    const { business } = this.props;
    if (!business.title) {
      // TODO: report analytics
      return DEFAULT_PAGE_TITLE;
    }
    return `Mapo | המלצה על ${business.subCategories[0].title} ב${business.placements[0].heName}`;
  }
  getMetaImage() {
    const { business } = this.props;
    if (!business) return '';

    return business.logoUrl;
  }
  getMetaDescription() {
    const { business } = this.props;
    if (!business) return null;

    try {
      return `${business.description.slice(0, 130)}`;
    } catch (e) {
      return '';
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title key="title">{this.getPageTitle()}</title>
          <meta property="description" key="description" content={this.getMetaDescription()} />
          <meta property="og:title" key="og:title" content={this.getPageTitle()} />
          <meta property="og:image" key="og:image" content={this.getMetaImage()} />
          <meta property="og:image:alt" key="og:image:alt" content={this.getPageTitle()} />
          <meta
            property="og:description"
            key="og:description"
            content={this.getMetaDescription()}
          />
        </Head>
        <BusinessPage {...this.props} />
      </div>
    );
  }
}

export default Business;
