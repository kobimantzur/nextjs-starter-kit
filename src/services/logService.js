const Sentry = require('@sentry/node');

export const reportError = exception => {
  Sentry.captureException(exception);
};
