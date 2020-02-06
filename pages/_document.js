import Document, { Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    console.log('__document');
    return (
      <html dir="rtl">
        <Head>
          {/* <title>Site Title</title> */}
          <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.ga =
        window.ga ||
        function() {
          (ga.q = ga.q || []).push(arguments);
        };
      ga.l = +new Date();
      ga('create', 'UA-129440192-1', 'auto');
      ga('send', 'pageview');`
            }}
          />

          <script async src="https://www.google-analytics.com/analytics.js"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                WebFont.load({
                    google: {
                      families: ['Alef']
                    }
                  });`
            }}
          />
        </body>
      </html>
    );
  }
}
