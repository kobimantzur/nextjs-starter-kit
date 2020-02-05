import React, { Component } from 'react';
import './index.scss';
import CardWrap from '../../../../components/CardWrap';

export default class InfoCards extends Component {
  getInfoItems(selectedPlace) {
    let infoItems;
    try {
      if (!selectedPlace.infoItems) {
        infoItems = [];
      }
      infoItems = JSON.parse(selectedPlace.infoItems);
    } catch (e) {
      return [];
    }
    return infoItems;
  }

  renderCard(infoItem, index) {
    return (
      <CardWrap className="info-card" key={index}>
        <h3>{infoItem.title}</h3>
        <p>{infoItem.description}</p>
      </CardWrap>
    );
  }

  render() {
    const { selectedPlace } = this.props;
    if (!selectedPlace) return null;
    const infoItems = this.getInfoItems(selectedPlace);

    return (
      <div className="info-cards">
        {infoItems.map((infoItem, i) => this.renderCard(infoItem, i))}
      </div>
    );
  }
}
