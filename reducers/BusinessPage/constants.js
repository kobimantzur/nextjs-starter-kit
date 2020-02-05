import { BASE_API } from '../../constants';

export const GET_BY_FRIENDLY_URL = `${BASE_API}businesses/getByFriendlyUrl`;
export const SUBMIT_BUSINESS_REVIEW_URL = `${BASE_API}businessSurveys/submitBusinessReview`;

export const SET_BUSINESS = 'SET_BUSINESS';
export const SET_EMPTY_STATE = 'SET_EMPTY_STATE';
export const SET_REVIEWS = 'SET_REVIEWS';
export const SET_REVIEW_MODAL_STATE = 'SET_REVIEW_MODAL_STATE'
export const SET_REVIEW_LOADING_STATE = 'SET_REVIEW_LOADING_STATE';