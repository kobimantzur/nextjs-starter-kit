import React, { Component } from 'react';
import './index.scss';

export default class ShareButtons extends Component {
  onClick = (type) => {
    const { business } = this.props;
    const { friendlyUrl } = business;
    const shareTitle = 'המלצה על אטרקציות בברלין - אלכסנדרפלץ';
    const sharableUrl = `https://app.mymapo.com/business/${friendlyUrl}`;
    switch (type) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer.php?u=${sharableUrl}`);
        break;
      case 'whatsapp':
        // window.open(`whatsapp://send?text=${shareTitle}\n${encodeURIComponent(sharableUrl)}`);
        window.open(`whatsapp://send?text=${encodeURIComponent(sharableUrl)}`);
        break;
      case 'twitter':
        window.open(`http://twitter.com/share?url=${sharableUrl}&hashtags=Mapo&text=${shareTitle}`);
        break;
      case 'clipboard':
        this.copyToClipboard(`${shareTitle}\n ${sharableUrl}`);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="share-buttons">
        <i className="fab fa-facebook-square fb" onClick={() => this.onClick('facebook')} />
        {/* <i className="fab fa-instagram ig" onClick={() => this.onClick('instagram')} /> */}
        <i className="fab fa-whatsapp wa" onClick={() => this.onClick('whatsapp')} />
        <i className="fab fa-twitter tw" onClick={() => this.onClick('twitter')} />
      </div>
    );
  }
}
