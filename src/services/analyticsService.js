import ReactGA from 'react-ga';
import { isDev } from './commonService';
const GOOGLE_ANALYTICS_KEY = '';

export const initAnalytics = () => {
  if (GOOGLE_ANALYTICS_KEY) {
    ReactGA.initialize(GOOGLE_ANALYTICS_KEY);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

};

export const reportEvent = (category, action, additionalParams) => {
  if (isDev() || !GOOGLE_ANALYTICS_KEY) return;

  ReactGA.event({
    category,
    action,
    ...additionalParams,
    currentUrl: window.location.href,
  });
};

export const reportScreen = screenName => {
  if (isDev() || !GOOGLE_ANALYTICS_KEY) return;
  
  ReactGA.pageview(screenName);
};
