import ReactGA from 'react-ga';
import { isDev } from './commonService';
// ReactGA.initialize('912341008826-mdvp869k8s8orq80sklbp8o64r26soc9.apps.googleusercontent.com');

export const initAnalytics = () => {
  
  ReactGA.initialize('UA-157971736-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const reportEvent = (category, action, additionalParams) => {
  if (isDev()) return;

  ReactGA.event({
    category,
    action,
    ...additionalParams,
    currentUrl: window.location.href,
  });
};

export const reportScreen = screenName => {
  if (isDev()) return;
  
  ReactGA.pageview(screenName);
};
