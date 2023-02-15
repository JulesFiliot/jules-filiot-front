import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/UI/text.scss';

function Text({ text }) {
  return (
    <div className="text-container">
      {text}
    </div>
  );
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
