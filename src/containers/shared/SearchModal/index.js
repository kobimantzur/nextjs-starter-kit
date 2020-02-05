import React, { Component } from 'react';
import Modal from 'react-modal';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { setSearchModalState, searchQuery } from '../../../reducers/Search/actions';
import SearchBar from './Components/SearchBar';
import './index.scss';
import AutocompleteOptions from './Components/AutocompleteOptions';

// Modal.setAppElement('#react-root');
Modal.setAppElement('#__next');

class SearchModal extends Component {
  render() {
    const { isSearchOpen } = this.props;

    return (
      <Modal
        id="searchModal"
        isOpen={isSearchOpen}
        onRequestClose={() => this.props.setSearchModalState(false)}
        contentLabel="Example Modal"
      >
        <SearchBar {...this.props} />
        <AutocompleteOptions {...this.props} />
      </Modal>
    );
  }
}
const mapStateToProps = ({ SearchReducer }) => {
  const {
    isSearchOpen, isSearchLoading, autocompleteList, query,
  } = SearchReducer;
  return {
    isSearchOpen,
    isSearchLoading,
    autocompleteList,
    query,
  };
};
const mapDispatchToProps = {
  setSearchModalState,
  searchQuery,
  push,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
