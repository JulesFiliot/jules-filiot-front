import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/UI/icon.scss';

function Icon({ svgSrc, customClass }) {
  return (
    <div className={`icon-container${customClass ? ` ${customClass}` : ''}`}>
      {svgSrc}
    </div>
  );
}

Icon.propTypes = {
  svgSrc: PropTypes.element.isRequired,
  customClass: PropTypes.string,
};
Icon.defaultProps = {
  customClass: '',
};

export default Icon;
