import React, { Component } from 'react';
import './index.scss';
import { buildPlaceUrl } from '../../../../../services/urlBuilderService';

export default class AutocompleteOptions extends Component {
  getBoldedText(pattern, text) {
    if (!text) return '';
    if (!pattern) return text;

    const updatedText = text.replace(pattern, `<strong>${pattern}</strong>`);

    return updatedText;
  }

  onPlaceClick = (place) => {
    const targetUrl = buildPlaceUrl(place);

    this.props.setSearchModalState(false);
    this.props.push(targetUrl);
  };

  renderPlacements(placementsList) {
    const { query } = this.props;
    if (!placementsList) return null;
    return (
      <div className="placements-list">
        {/* <h3>מקומות</h3> */}
        {placementsList.map((placement) => {
          const placementText = `${placement.heName} ${
            placement.country ? `, ${placement.country.heName}` : ''
          }`;
          return (
            <div
              className="placement"
              key={placement._id}
              onClick={() => this.onPlaceClick(placement)}
            >
              <i className="fas fa-map-marker-alt" />
              <span
                className="name"
                dangerouslySetInnerHTML={{ __html: this.getBoldedText(query, placementText) }}
              />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { autocompleteList } = this.props;
    if (!autocompleteList) return null;
    const { placementsList } = autocompleteList;
    return (
      <div className="autocomplete-options">
        {/* a */}
        {this.renderPlacements(placementsList)}
      </div>
    );
  }
}
