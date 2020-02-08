import React, { Component } from 'react';
import { MENU_LINKS } from './constants';
import './index.scss';
import Link from 'next/link';
import { Button, Drawer } from 'antd';
import { isMobile } from '../../../../services/commonService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default class NavigationMenu extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };  
  renderMobile() {
    return (
      <div type="primary" onClick={this.showDrawer} className="drawer-button">
        <FontAwesomeIcon icon={faBars} />
      </div>
    );
  }
  renderDesktop() {
    return (
      <React.Fragment>
        {MENU_LINKS.map((link, index) => (
          <Link href={link.href} key={index}>
            <a>{link.title}</a>
          </Link>
        ))}
      </React.Fragment>
    );
  }
  render() {
    return (
      <div className="navigation-menu">
        {isMobile() ? this.renderMobile() : this.renderDesktop()}
        <Drawer
          title={` `}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'fixed' }}
        >
          {MENU_LINKS.map(link => (
            <a key={link.href} className="link" href={link.href} onClick={() => this.setState({visible: false})}>
              {link.title}
              </a>
          ))}
        </Drawer>
      </div>
    );
  }
}
