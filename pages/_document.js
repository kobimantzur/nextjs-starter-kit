import Document, { Head, Main, NextScript } from 'next/document';
import { Next as NextHead } from 'next/head';
import { DEFAULT_META_DESCRIPTION } from '../src/constants';
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  getPageDescription() {
    return DEFAULT_META_DESCRIPTION;
  }

  render() {
    return (
      <html dir="rtl">
        <Head>
          <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </html>
    );
  }
}
