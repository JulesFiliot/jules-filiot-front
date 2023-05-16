import React from 'react';
import PropTypes from 'prop-types';

import applyTextStyle from '../../utils/textProcessing';

import '../../styles/UI/text.scss';

function Text({ text }) {
  return (
    <div className="text-container">
      {applyTextStyle(text)}
    </div>
  );
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
