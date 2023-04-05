import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/UI/image.scss';

function Image({ src, alt, customClass }) {
  return (
    <div className={`image-container${customClass ? ` ${customClass}` : ''}`}>
      <img className="image" src={src} alt={alt} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};
Image.defaultProps = {
  customClass: '',
};

export default Image;
