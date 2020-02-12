import React, { Component } from 'react';

import { searchBySubCategory } from '../../../src/reducers/Search/actions';
import SearchResultsContainer from '../../../src/containers/SearchResultsPage';
import { DEFAULT_PAGE_TITLE } from '../../../src/constants';
import Head from 'next/head';
import { reportError } from '../../../src/services/logService';
class SearchResults extends Component {
  static async getInitialProps({ store, isServer, pathname, query, ctx }) {
    const { placeId, subCategoryId } = query;
    try {
      const res = await store.dispatch(searchBySubCategory(placeId, subCategoryId));
      return { ...res };
    } catch (e) {
      reportError(e);
    }
    return {};
  }
  getPageTitle() {
    const { selectedPlace, selectedSubCategory } = this.props;
    if (!selectedPlace || !selectedSubCategory) {
      return DEFAULT_PAGE_TITLE;
    }

    return `Mapo | המלצות על ${selectedSubCategory.title} ב${selectedPlace.heName}`;
  }
  render() {
    return (
      <div>
        <Head>
          <title key="title">{this.getPageTitle()}</title>
        </Head>
        <SearchResultsContainer {...this.props} />
      </div>
    );
  }
}

export default SearchResults;
