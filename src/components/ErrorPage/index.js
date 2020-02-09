import React, { Component } from 'react';
import './index.scss';
import { Page, Content, FancyTitle } from '../';
import PrimaryButton from '../PrimaryButton';

class ErrorPage extends Component {
  render() {
    return (
      <Page className="error-page">
        <Content>
          <FancyTitle highlightedTitle="404" />
            <div className="wrapper">
                <h2>העמוד אותו חיפשתם אינו קיים.</h2>
                <PrimaryButton href="/">חזרה לדף הבית</PrimaryButton>
            </div>
        </Content>
      </Page>
    );
  }
}

export default ErrorPage;
