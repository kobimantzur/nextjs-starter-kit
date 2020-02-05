import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import CardWrap from '../../../../components/CardWrap';
import './index.scss';

export default class BusinessGallery extends Component {
  render() {
    const { business } = this.props;
    if (!business) return null;
    const photos = [];
    if (business.logoUrl) {
      photos.push({
        src: business.logoUrl,
        thumbnail: business.logoUrl,
        // thumbnailWidth: 320,
        thumbnailHeight: '300',
        isSelected: true,
        // caption: 'After Rain (Jeshu John - designerspics.com)',
      });
    }
    return (
      <CardWrap className="gallery">
        <Gallery images={photos} enableImageSelection={false} rowHeight={300} />
      </CardWrap>
    );
  }
}
