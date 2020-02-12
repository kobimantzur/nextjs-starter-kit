import Document, { Head, Main, NextScript } from 'next/document';
import { Next as NextHead } from 'next/head';
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  getPageDescription() {
    return `גלו את ההמלצות הכי חמות שיהפכו את הטיול הבא שלכם לבלתי נשכח`;
  }

  render() {
    return (
      <html dir="rtl">
        <Head>
          <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/public/img/favicons.ico/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/public/img/favicons.ico/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/public/img/favicons.ico/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/public/img/favicons.ico/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/public/img/favicons.ico/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/public/img/favicons.ico/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/public/img/favicons.ico/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/public/img/favicons.ico/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/public/img/favicons.ico/apple-icon-180x180.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/public/img/favicons.ico/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/public/img/favicons.ico/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/public/img/favicons.ico/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/public/img/favicons.ico/favicon-16x16.png"
          />
          <link rel="manifest" href="/public/img/favicons.ico/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                WebFont.load({
                    google: {
                      families: ['Varela Round']
                    }
                  });`
            }}
          />
        </body>
      </html>
    );
  }
}
