import ReactGA from 'react-ga';
// ReactGA.initialize('912341008826-mdvp869k8s8orq80sklbp8o64r26soc9.apps.googleusercontent.com');

export const initAnalytics = () => {
  debugger;
  ReactGA.initialize('UA-157971736-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

};

export const reportEvent = params => {
  // if (env !== 'prod') return;
  ReactGA.event(params);
};

export const reportScreen = screenName => {
  // if (env !== 'prod') return;
  ReactGA.pageview(screenName);
};
