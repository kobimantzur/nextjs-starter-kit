import axios from 'axios';
import { BASE_API } from '../constants';
import { getCookie } from './commonService';
import { showErrorToast } from './notificationService';

const Axios = axios.create();
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export const postRequest = (relativeUrl, params = {}, headers = {}) => {
  const requestUrl = `${BASE_API}${relativeUrl}`;
  return Axios.post(requestUrl, params, {
    headers: {
      ...headers,
    },
  });
};

export const getRequest = (relativeUrl, params = {}, headers = {}) => {
  const requestUrl = `${BASE_API}${relativeUrl}`;
  return Axios.get(requestUrl, {
    params,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  });
};
