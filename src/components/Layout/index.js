import React from 'react';
import { Layout as AntLayout, Icon } from 'antd';
import { connect } from 'react-redux';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';

import { initAnalytics } from '../../services/analyticsService';
import fontAwesomeCss from '@fortawesome/fontawesome-free/css/all.css';

// import antdCss from 'antd/dist/antd.min.css';
import './index.scss';

const propTypes = {};
const defaultProps = {};

class Layout extends React.Component {

  componentDidMount() {
    initAnalytics();
  }

  render() {
    return (
      <AntLayout>
        <style dangerouslySetInnerHTML={{ __html: require('antd/dist/antd.min.css') }} />
        <style dangerouslySetInnerHTML={{ __html: fontAwesomeCss }} />
        <AppHeader {...this.props} />
        {this.props.children}
        <AppFooter />
        
      </AntLayout>
    );
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
