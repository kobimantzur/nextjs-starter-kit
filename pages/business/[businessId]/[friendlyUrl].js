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
    return `Mapo | ${business.englishName}`;
  }
  render() {
    return (
      <div>
        <Head>
          <title key="title">{this.getPageTitle()}</title>
        </Head>
        <BusinessPage {...this.props} />
      </div>
    );
  }
}

export default Business;
