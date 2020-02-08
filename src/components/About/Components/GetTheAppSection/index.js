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
          <a href="">
          <img className="app-store" src="/static/img/download/app-store-download.svg" />
          </a>
          <a href="">
          <img className="play-store" src="/static/img/download/google-play-download.svg" />
          </a>
        </div>

      </Section>
    );
  }
}
