import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

import '../styles/layout.scss';

function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Layout;
