import { Layout as AntLayout, Drawer, Button } from 'antd';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import AppstoreLogo from '../../../../img/apple-app.png';
import GooglestoreLogo from '../../../../img/google-app.png';
import SearchBar from '../../../../containers/SearchPage/Components/SearchBar';
import { setSearchModalState } from '../../../../reducers/Search/actions';
import './index.scss';
import { isMobile } from '../../../../services/commonService';
import Menu from '../Menu';

const PLACEHOLDER_TEXT = 'חפשו במאפו';
const { Header } = AntLayout;

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass = '';
      if (window.scrollY > this.vw(15)) {
        activeClass = 'scrolled';
      }
      this.setState({ activeClass });
    });
  }

  vw(v) {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

  render() {
    const { isFocused, activeClass } = this.state;
    const { isLoading, selectedPlace, selectedSubCategory } = this.props;
    const searchTerm =
      selectedPlace && selectedSubCategory
        ? `${selectedSubCategory.title} ב${selectedPlace.heName}`
        : '';
    return (
      <Header className={`header ${isFocused ? 'on-focus' : ''} ${activeClass}`}>
        <div className="right">
        <Menu {...this.props} />
        <div className="search-bar-preview" onClick={() => this.props.setSearchModalState(true)}>
            {!isMobile() && <span>{PLACEHOLDER_TEXT}</span>}
            <i className="fa fa-search" />
          </div>

          
        </div>
        <div className="left">
        <a href="/">
            <img alt="Mapo" className="logo" src={'/static/img/logo-white.png'} />
          </a>
        </div>
        {isMobile() && (
          <div className="store-icons">
            <a
              target="_blank"
              rel="noopener noreferer"
              href="https://itunes.apple.com/us/app/avartii-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%91%D7%9C%D7%95%D7%A1-%D7%90%D7%A0%D7%92-%D7%9C%D7%A1/id1329505993?mt=8"
            >
              <img className="appstore" alt="AppStore" src={AppstoreLogo} />
            </a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.avartii.app">
              <img className="google" alt="Google Play Store" src={GooglestoreLogo} />
            </a>
          </div>
        )}
      </Header>
    );
  }
}
const mapStateToProps = ({ SearchReducer }) => {
  const { selectedPlace, selectedSubCategory, isLoading } = SearchReducer;
  return {
    isLoading,
    selectedPlace,
    selectedSubCategory
  };
};
const mapDispatchToProps = {
  setSearchModalState
};
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
