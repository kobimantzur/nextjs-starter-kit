import React from 'react';
import { Layout as AntLayout, Icon } from 'antd';
import { connect } from 'react-redux';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import './index.scss';
import { initAnalytics } from '../../services/analyticsService';
import 'antd/dist/antd.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import SearchBar from '../../containers/SearchPage/Components/SearchBar';
import { setSearchModalState } from '../../reducers/Search/actions';
import SearchModal from '../../containers/shared/SearchModal';

const propTypes = {};
const defaultProps = {};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    initAnalytics();
  }

  render() {
    return (
      <AntLayout>
        <AppHeader {...this.props} />
        {this.props.children}
        <AppFooter />
        <SearchModal {...this.props} />
      </AntLayout>
    );
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
