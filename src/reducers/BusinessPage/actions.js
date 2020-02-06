import axios from 'axios';
import * as types from './constants';
import { reportEvent } from '../../services/analyticsService';

export function cleanBusinessPage() {
  return {
    type: types.SET_BUSINESS,
    payload: { isLoading: false, business: undefined }
  };
}

export const setEmptyState = () => ({
  type: types.SET_EMPTY_STATE
});

export const fetchBusinessByFriendlyUrl = friendlyUrl => {
  return axios.get(types.GET_BY_FRIENDLY_URL, {
    params: {
      friendlyUrl
    }
  });
};

export const getBusinessByFriendlyUrl = friendlyUrl => async dispatch => {
  const response = await fetchBusinessByFriendlyUrl(friendlyUrl);
  if (!response || !response.data) {
    // TODO: notify error
    // TODO: redirect
  }
  dispatch({
    type: types.SET_BUSINESS,
    payload: { business: response.data }
  });

  return {
    business: response.data
  };
};

export const submitBusinessReview = data => dispatch => {
  axios
    .post(types.SUBMIT_BUSINESS_REVIEW_URL, data)
    .then(response => {
      reportEvent({
        category: 'ReviewModal',
        action: 'Complete'
      });
      dispatch({
        type: types.SET_REVIEWS,
        payload: { reviewsList: response.data.reviewsList, userReview: response.data.userReview }
      });
      // TODO: show success message
      // TODO: append the comment on top of all comments
    })
    .catch(e => {
      console.log(e);
    });
};

export function setReviewModalState(isReviewModalOpen) {
  reportEvent({
    category: 'ReviewModal',
    action: isReviewModalOpen ? 'ModalOpen' : 'ModalClose'
  });
  return {
    type: types.SET_REVIEW_MODAL_STATE,
    payload: { isReviewModalOpen }
  };
}

export function setReviewLoadingState(isReviewLoading) {
  return {
    type: types.SET_REVIEW_LOADING_STATE,
    payload: { isReviewLoading }
  };
}
