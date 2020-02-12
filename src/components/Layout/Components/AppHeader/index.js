import { Layout as AntLayout, Drawer, Button } from 'antd';

import { connect } from 'react-redux';
import React, { Component } from 'react';
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
            <img alt="Mapo" className="logo" src={'/public/img/logos/logo-white.svg'} />
          </a>
        </div>
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
