import * as types from './types';

const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, action = {}) => {
  const payload = action ? action.payload : {};
  switch (action.type) {
    case types.SET_COUNTRIES:

      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
