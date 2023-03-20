import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/UI/link.scss';

function LinkComp({
  url, label, uppercase, lowercase, capitalize, negative,
}) {
  return (
    <a
      className={`defaultLink${uppercase ? ' uppercase' : ''}${lowercase ? ' lowercase' : ''}${capitalize ? ' capitalize' : ''}${negative ? ' negative' : ''}`}
      href={url}
    >
      {label}
    </a>

  );
}

LinkComp.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  negative: PropTypes.bool,
};
LinkComp.defaultProps = {
  uppercase: false,
  lowercase: false,
  capitalize: false,
  negative: false,
};

export default LinkComp;
