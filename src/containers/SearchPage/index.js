import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getCountries } from '../../reducers/Search/actions';
import { CountryPicker } from './Components';
import { FancyTitle, Content, Page, AppSpinner } from '../../components';

class SearchPage extends Component {
  render() {
    const { isLoading } = this.props;
    
    return (
      <Page className="search-page" {...this.props} isLoading>
        {isLoading && <AppSpinner />}
        <Content>
          {!isLoading && (
            <React.Fragment>
              <FancyTitle highlightedTitle="ברוכים הבאים למאפו" />
              <CountryPicker {...this.props} />
            </React.Fragment>
          )}
        </Content>
      </Page>
    );
  }
}
const mapStateToProps = ({ SearchReducer }) => {
  const { isLoading, countriesList } = SearchReducer;
  return {
    isLoading,
    countriesList
  };
};
const mapDispatchToProps = {
  getCountries,
  push
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
