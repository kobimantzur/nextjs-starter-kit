import { push } from 'connected-react-router';
import { getRequest } from '../../services/requestService';
import * as types from './types';
import { buildSearchUrl } from '../../services/urlBuilderService';

export const getCountries = () => async dispatch => {
  const res = await getRequest('/placements/getPlacementsData');
  const payload = { isLoading: false, ...res.data };
  dispatch({ type: types.SET_COUNTRIES, payload });

  return payload;
};

export const getPlaceDetails = placeId => async dispatch => {
  const res = await getRequest(`/placements/getPlaceDetails?placeId=${placeId}`);

  dispatch({ type: types.SET_PLACE_DETAILS, payload: { isLoading: false, ...res.data } });
};

export function setSearchModalState(isSearchOpen) {
  return {
    type: types.SET_MODAL_STATE,
    payload: { isSearchOpen }
  };
}

export const searchQuery = (query = '') => async dispatch => {
  const firstPayload = { isSearchLoading: true, query };
  if (!query) {
    firstPayload.autocompleteList = [];
    firstPayload.isSearchLoading = false;
  }
  dispatch({ type: types.SEARCH_QUERY, payload: firstPayload });
  if (query) {
    const res = await getRequest(`webSearch/searchByQuery?query=${query}`);
    dispatch({
      type: types.SEARCH_QUERY,
      payload: { autocompleteList: res.data, isSearchLoading: false }
    });
  }
};

export const navigateSearchBySubCategory = (selectedPlace, subCategory) => async dispatch => {
  const targetUrl = buildSearchUrl({
    placeId: selectedPlace._id,
    subCategoryId: subCategory._id
  });
  dispatch(push(targetUrl));
  dispatch({
    type: types.SEARCH_SUB_CATEGORY,
    payload: { isLoading: true, selectedSubCategory: subCategory }
  });
};

export const searchBySubCategory = (placeId, subCategoryId) => async dispatch => {
  dispatch({
    type: types.SEARCH_SUB_CATEGORY,
    payload: { isLoading: true }
  });
  const res = await getRequest(
    `webSearch/searchBySubCategory?placeId=${placeId}&subCategoryId=${subCategoryId}`
  );
  const payload = { isLoading: false, ...res.data };
  dispatch({
    type: types.SEARCH_SUB_CATEGORY,
    payload
  });

  return payload;
};
