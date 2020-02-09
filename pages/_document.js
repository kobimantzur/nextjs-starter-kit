import Document, { Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  getPageDescription() {
    return `גלו את ההמלצות הכי חמות שיהפכו את הטיול הבא שלכם לבלתי נשכח`;
  }
  getPageTitle() {
    return `Mapo | מטיילים ממליצים בחו״ל`;
  }

  render() {
    return (
      <html dir="rtl">
        <Head>
          <title key='title'>{this.getPageTitle()}</title>
          
          <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/img/favicons.ico/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/img/favicons.ico/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/img/favicons.ico/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/img/favicons.ico/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/img/favicons.ico/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/img/favicons.ico/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/img/favicons.ico/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/img/favicons.ico/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicons.ico/apple-icon-180x180.png" />

          <link rel="icon" type="image/png" sizes="192x192"  href="/static/img/favicons.ico/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicons.ico/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/img/favicons.ico/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicons.ico/favicon-16x16.png" />
          <link rel="manifest" href="/static/img/favicons.ico/manifest.json" />        
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <meta key="title" property="title" content={this.getPageTitle()} />
          <meta key="description" property="description" content={this.getPageDescription()} />

          <meta key="og:title" property="og:title" content={this.getPageTitle()} />
          <meta key="og:image" property="og:image" content="https://www.mymapo.com/static/img/meta/wide-share.jpg" />
          <meta key="og:description" property="og:description" content={this.getPageDescription()} />
          <meta key="fb:app_id" property="fb:app_id" content="291124068055220" />

          <meta key="twitter:image:src" property="twitter:image:src" content="https://www.mymapo.com/static/img/meta/wide-share.jpg" />
          <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
          <meta key="twitter:description" name="twitter:description" content={this.getPageDescription()} />
          <meta key="keywords" name="keywords" content={`mapo, מאפו, מטיילים, ויזה לארצות הברית, המלצות, חול`} />

          <meta name="apple-itunes-app" content="app-id=1329505993" />
          <link href="ios-app://1329505993" rel="alternate" />
          <meta property="al:ios:app_name" content="Mapo" />
          <meta property="al:ios:app_store_id" content="1329505993" />
          <meta property="al:ios:url" content="https://www.mymapo.com/" />
          <link href="android-app://com.avartii.app" rel="alternate" />
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
