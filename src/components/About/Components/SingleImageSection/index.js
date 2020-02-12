import React, { Component } from 'react';
import Section from '../../../Section';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail, faHiking, faUtensilSpoon, faHome } from '@fortawesome/free-solid-svg-icons';
export default class SingleImageSection extends Component {
  render() {
    return (
      <Section className="single-image-section">
        <div className="right">
          <h2>כל מה שאתם צריכים</h2>
          <p>
            גלו מקומות מגניבים ועסקים אמינים וקראו מה ישראלים חשבו עליהם. נווטו למקום, צרו קשר,
            וקבלו פרטים חשובים במקום אחד.
          </p>
        </div>
        <div className="left">
          <img src="/public/img/about/all-you-need-section.png" />
        </div>
      </Section>
    );
  }
}
