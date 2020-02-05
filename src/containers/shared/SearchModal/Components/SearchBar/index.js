import React, { Component } from 'react';
import { Input, Spin, Icon } from 'antd';
import './index.scss';

const { Search } = Input;
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      isSearchOpen: false,
    };
  }

  componentDidMount() {
    this.setState({ isSearchOpen: this.props.isSearchOpen });
  }

  componentDidUpdate(prevProps, prevState) {
    const { isSearchOpen } = this.props;

    if (isSearchOpen && !prevState.isSearchOpen) {
      this.inputRef.focus();
    }
  }

  onSearch = (e) => {
    const query = e.target.value;

    this.props.searchQuery(query);
  };

  render() {
    const { isSearchLoading } = this.props;

    return (
      <div className="search-bar">
        {isSearchLoading && <Icon type="loading" style={{ fontSize: 24 }} spin />}
        <Search
          ref={r => (this.inputRef = r)}
          prefixCls="search-input"
          placeholder="חפשו מקומות או ערים"
          onChange={e => this.onSearch(e)}
          enterButton
        />
      </div>
    );
  }
}
