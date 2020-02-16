import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Layout from './components/Layout';
import ScrollToTop from './components/Layout/Components/ScrollToTop';
import { AppSpinner } from './components';


const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <ScrollToTop>
      <Suspense fallback={<AppSpinner />}>
        <Layout>
          <Route path="/" component={SearchPage} />
        </Layout>
      </Suspense>
    </ScrollToTop>
  </ConnectedRouter>
);

export default Routes;
