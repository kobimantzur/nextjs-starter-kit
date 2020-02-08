import React, { Component } from 'react';
import { Page, Content } from '..';
import AppPreviewSection from './Components/AppPreviewSection';
import BulletsSection from './Components/BulletsSection';
import './index.scss';
import SingleImageSection from './Components/SingleImageSection';
import GetTheAppSection from './Components/GetTheAppSection';
export default class About extends Component {
  render() {
    return (
      <Page className="about-page">
        <Content>
          <AppPreviewSection />
          <BulletsSection />
          <GetTheAppSection />
        </Content>
      </Page>
    );
  }
}
