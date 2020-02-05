import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Layout from './components/Layout';
import Download from './components/Download';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/Layout/Components/ScrollToTop';
import SearchResultsPage from './containers/SearchResultsPage';
import { AppSpinner } from './components';

const TermsOfUse = lazy(() => import('./components/TermsOfUse'));
const SearchPage = lazy(() => import('./containers/SearchPage'));
const PlacePage = lazy(() => import('./containers/PlacePage'));
const BusinessPage = lazy(() => import('./containers/BusinessPage'));

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <ScrollToTop>
      <Suspense fallback={<AppSpinner />}>
        <Layout>
          <Route path="/" exact component={SearchPage} />
          <Route path="/download" exact component={Download} />
          {/* <Route path="/:countryId" component={} */}
          <Route path="/search" component={SearchResultsPage} />
          <Route path="/business/:friendlyUrl" component={BusinessPage} />
          <Route path="/place/:placeId" component={PlacePage} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfUse} />
          {/* <Route path="/"  component={BusinessPage} /> */}
        </Layout>
      </Suspense>
    </ScrollToTop>
  </ConnectedRouter>
);

export default Routes;
