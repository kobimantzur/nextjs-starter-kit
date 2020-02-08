import React, { Component } from 'react';
import Section from '../../../Section';
import './index.scss';

export default class GetTheAppSection extends Component {
  render() {
    return (
      <Section className="get-the-app-section">
        <div className="right">
        <h2>הצטרפו עכשיו</h2>
        <p>
גלו את ההמלצות שיהפכו את הטיול הבא שלכם לבלתי נשכח
        </p>
        </div>
        <div className="left">
          <a href="https://itunes.apple.com/us/app/avartii-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%91%D7%9C%D7%95%D7%A1-%D7%90%D7%A0%D7%92-%D7%9C%D7%A1/id1329505993?mt=8">
          <img className="app-store" src="/static/img/download/app-store-download.svg" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.avartii.app">
          <img className="play-store" src="/static/img/download/google-play-download.svg" />
          </a>
        </div>

      </Section>
    );
  }
}
