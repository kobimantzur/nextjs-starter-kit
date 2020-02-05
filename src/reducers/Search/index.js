import * as types from './types';

const INITIAL_STATE = {
  isLoading: true,
  isSearchOpen: false,
  isSearchLoading: false,
  selectedPlace: undefined,
  subCategoriesList: [],
};

export default (state = INITIAL_STATE, action = {}) => {
  const payload = action ? action.payload : {};
  switch (action.type) {
    case types.SET_COUNTRIES:
    case types.SET_PLACE_DETAILS:
    case types.SET_MODAL_STATE:
    case types.SEARCH_QUERY:
    case types.SEARCH_SUB_CATEGORY:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
