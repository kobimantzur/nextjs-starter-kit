import * as types from "./constants";

const INITIAL_STATE = {
  business: undefined,
  isLoading: true,
  isReviewLoading: false,
  isReviewModalOpen: false
};

export default (state = INITIAL_STATE, action = {}) => {
  const payload = action ? action.payload : {};
  switch (action.type) {
    case types.SET_BUSINESS:
      return { ...state, business: payload.business, isLoading: false };
    case types.SET_EMPTY_STATE:
      return { ...state, isLoading: false, business: undefined };
    case types.SET_REVIEW_MODAL_STATE:
      return { ...state, isReviewModalOpen: payload.isReviewModalOpen };
    case types.SET_REVIEWS:
      return {
        ...state,
        isReviewModalOpen: false,
        isReviewLoading: false,
        business: {
          ...state.business,
          reviewsList: payload.reviewsList,
          userReview: payload.userReview
        }
      };
    case types.SET_REVIEW_LOADING_STATE:
      return {
        ...state,
        isReviewLoading: payload.isReviewLoading
      };
    default:
      return state;
  }
};
