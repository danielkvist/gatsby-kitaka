import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Nav from './nav/Nav';
import Footer from './footer/Footer';

import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      <main className={styles.root}>{children}</main>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
