import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Page, AppSpinner } from '../../components';
import { getPlaceDetails, navigateSearchBySubCategory } from '../../reducers/Search/actions';
import { CountryHeader, CitiesPicker, InfoCards } from './Components';
import SubCategoryPicker from '../../components/SubCategoryPicker';
import Content from '../../components/Content';
import FancyTitle from '../../components/FancyTitle';

class PlacePage extends Component {
  // componentDidMount() {
  //   const { match } = this.props;
  //   const { placeId } = match.params;
  //   if (!placeId) return this.props.push('/');
  //   this.props.getPlaceDetails(placeId);
  // }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const { match } = this.props;
      const { placeId } = match.params;
      if (!placeId) return this.props.push('/');
      this.props.getPlaceDetails(placeId);
    }
  }

  render() {
    const { selectedPlace, isLoading } = this.props;
    let highlightedTitle = '';
    if (selectedPlace) {
      highlightedTitle = `${selectedPlace.heName}`;
      // if (selectedPlace.country && typeof selectedPlace.country === 'object') {
      //   highlightedTitle += `, ${selectedPlace.country.heName}`;
      // }
    }

    return (
      <Page className="place-page">
        {isLoading && <AppSpinner />}
        {!isLoading && (
          <Content>
            {selectedPlace && (
              <FancyTitle
                highlightedTitle={`${highlightedTitle}.`}
                regularTitle="כל מה שרציתם לדעת על"
              />
            )}
            <SubCategoryPicker {...this.props} />
            <InfoCards {...this.props} />
            <CitiesPicker {...this.props} />
          </Content>
        )}
      </Page>
    );
  }
}
const mapStateToProps = ({ SearchReducer }) => {
  const { isLoading, selectedPlace, citiesList, subCategoriesList } = SearchReducer;
  return {
    isLoading,
    selectedPlace,
    citiesList,
    subCategoriesList
  };
};
const mapDispatchToProps = {
  getPlaceDetails,
  push,
  navigateSearchBySubCategory
};
export default connect(mapStateToProps, mapDispatchToProps)(PlacePage);
