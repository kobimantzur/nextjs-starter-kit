import React, { Component } from 'react';
import Section from '../../../Section';
import './index.scss';

export default class AppPreviewSection extends Component {
  render() {
    return (
      <Section className="app-preview-section">
        <div className="right">
            <img src="/static/img/logos/logo-blue.svg" />
          <h1>מטיילים ממליצים.</h1>
          <h2>אפליקציה לישראלים בחו״ל</h2>
        </div>
        <div className="left">
          <img src="/static/img/about/section-1.webp" />
        </div>
      </Section>
    );
  }
}
