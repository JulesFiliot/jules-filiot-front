import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/subtitle.scss';

function Subtitle({
  text, textColor, color, marginBottom, marginTop,
}) {
  return (
    <div className="subtitleContainer" style={{ marginTop, marginBottom }}>
      <div className="line" style={{ backgroundColor: color }} />
      <div className="text" style={{ color: textColor }}>{text}</div>
    </div>
  );
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  color: PropTypes.string,
  marginTop: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  marginBottom: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
};

Subtitle.defaultProps = {
  textColor: '#000000',
  color: '#000000',
  marginTop: '0px',
  marginBottom: '0px',
};

export default Subtitle;
