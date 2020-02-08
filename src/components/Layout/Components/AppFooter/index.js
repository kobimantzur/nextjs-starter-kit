import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntLayout } from 'antd';
import './styles.scss';
import Link from 'next/link';

const { Footer } = AntLayout;
const propTypes = {};

const defaultProps = {};
export default class AppFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Footer className="footer">
        <div className="links">
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>
          <span> | </span>
          <a href="mailto:contact@mymapo.com">contact@mymapo.com</a>
        </div>
        <div className="text">Copyright © 2018 Mapo. All rights reserved </div>
      </Footer>
    );
  }
}

AppFooter.propTypes = propTypes;
AppFooter.defaultProps = defaultProps;
