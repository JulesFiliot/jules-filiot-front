import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/title.scss';

function Title({
  text, textColor, color, marginTop, marginBottom,
}) {
  return (
    <div className="titleContainer" style={{ marginTop, marginBottom }}>
      <div className="leftLine" style={{ backgroundColor: color }} />
      <div className="text" style={{ color: textColor }}>{text}</div>
      <div className="rightLine" style={{ backgroundColor: color }} />
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  color: PropTypes.string,
  marginTop: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  marginBottom: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
};

Title.defaultProps = {
  textColor: '#000000',
  color: '#000000',
  marginTop: '0px',
  marginBottom: '0px',
};

export default Title;
