import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PlacePage from '../../../src/containers/PlacePage';
import { getPlaceDetails } from '../../../src/reducers/Search/actions';

class Place extends Component {
  static async getInitialProps({ store, isServer, pathname, query, ctx }) {
    const { placeId } = query;
    try {
      await store.dispatch(getPlaceDetails(placeId));
      return {};
    } catch (e) {}
    return {};
  }
  render() {
    return (
      <div>
        <PlacePage {...this.props} />
      </div>
    );
  }
}

export default Place;
