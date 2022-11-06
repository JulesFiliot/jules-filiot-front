import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/UI/smallTitle.scss';

function SmallTitle({
  text, textColor, color, marginBottom, marginTop, left,
}) {
  return (
    <div
      className={left ? 'smallTitleContainer left' : 'smallTitleContainer right'}
      style={{ marginTop, marginBottom }}
    >
      <div className="line" style={{ backgroundColor: color }} />
      <div
        className={left ? 'text leftText' : 'text rightText'}
        style={{ color: textColor }}
      >
        {text}

      </div>
    </div>
  );
}

SmallTitle.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  color: PropTypes.string,
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // title position, to the right by default
  left: PropTypes.bool,
};

SmallTitle.defaultProps = {
  textColor: '#000000',
  color: '#000000',
  marginTop: '0px',
  marginBottom: '0px',
  left: false,
};

export default SmallTitle;
