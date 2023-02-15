import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/UI/extendedButton.scss';
import Button from './Button';

function ExtendedButton({
  label, text, uppercase, lowercase, capitalize, onClick, extended,
}) {
  const [showText, setShowText] = useState(extended);

  return (
    <div className="extendedButtonContainer">
      <Button
        label={label}
        uppercase={uppercase}
        lowercase={lowercase}
        capitalize={capitalize}
        onClick={() => {
          setShowText(!showText);
          if (onClick) onClick();
        }}
        onBlur={!extended ? () => setShowText(false) : null}
      />
      <div
        className={`textContainer${showText ? ' displayed' : ''}`}
      >
        {text}
      </div>
    </div>
  );
}

ExtendedButton.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  extended: PropTypes.bool,
  onClick: PropTypes.func,
};
ExtendedButton.defaultProps = {
  uppercase: false,
  lowercase: false,
  capitalize: false,
  extended: false,
  onClick: null,
};

export default ExtendedButton;
