import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/UI/button.scss';

function Button({
  label, uppercase, lowercase, capitalize, onClick,
}) {
  return (
    <button
      className={`defaultButton${uppercase ? ' uppercase' : ''}${lowercase ? ' lowercase' : ''}${capitalize ? ' capitalize' : ''}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  uppercase: false,
  lowercase: false,
  capitalize: false,
  onClick: null,
};

export default Button;
