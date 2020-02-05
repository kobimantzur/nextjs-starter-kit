import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import Page from '../../components/Page';
import Content from '../../components/Content';
import { searchBySubCategory } from '../../reducers/Search/actions';
import BusinessListView from '../../components/BusinessListView';
import FancyTitle from '../../components/FancyTitle';
import SubCategoryPicker from '../../components/SubCategoryPicker';

class SearchResultsPage extends Component {
  componentDidMount() {
    this.loadResults();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.loadResults();
    }
  }

  loadResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const placeId = urlParams.get('placeId');
    const subCategoryId = urlParams.get('subCategoryId');

    this.props.searchBySubCategory(placeId, subCategoryId);
  }

  getPageTitle() {
    const { selectedPlace, selectedSubCategory } = this.props;
    let resultTitle = 'תוצאות חיפוש';
    if (selectedPlace && selectedSubCategory) {
      resultTitle += ` | ${selectedSubCategory.title} ב${selectedPlace.heName}`;
    }

    return resultTitle;
  }

  render() {
    const pageTitle = this.getPageTitle() || '';
    return (
      <Page className="search-results-page">
        <Content>
          {pageTitle && <FancyTitle highlightedTitle={pageTitle} />}
          <SubCategoryPicker {...this.props} />
          <div className="spacer" />
          <BusinessListView {...this.props} />
        </Content>
      </Page>
    );
  }
}
const mapStateToProps = ({ SearchReducer }) => {
  const {
    isLoading,
    selectedPlace,
    businessList,
    selectedSubCategory,
    subCategoriesList,
  } = SearchReducer;
  return {
    isLoading,
    selectedPlace,
    businessList,
    selectedSubCategory,
    subCategoriesList,
  };
};
const mapDispatchToProps = {
  searchBySubCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
