import ReactGA from 'react-ga';
ReactGA.initialize('912341008826-mdvp869k8s8orq80sklbp8o64r26soc9.apps.googleusercontent.com');

export const initAnalytics = () => {
  // console.log('init')
  // ReactGA.initialize('UA-129440192-1')
  // history.listen(location => ReactGA.pageview(location.pathname));
  // Crashlytics.crash();
};

export const reportEvent = params => {
  // if (env !== 'prod') return;
  ReactGA.event(params);
};

export const reportScreen = screenName => {
  // if (env !== 'prod') return;
  ReactGA.pageview(screenName);
};
