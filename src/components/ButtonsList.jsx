import React from 'react';
import PropTypes from 'prop-types';

import ExtendedButton from './UI/ExtendedButton';

import '../styles/buttonsList.scss';

function ButtonsList({
  data, uppercase, lowercase, capitalize, onClick, extended, centered,
}) {
  return (
    <div className="buttonsListContainer">
      {data.map(({ id, title, details }) => (
        <div key={`${id}-buttonlist`} className="buttonListItem">
          <ExtendedButton
            label={title}
            text={details}
            capitalize={capitalize}
            uppercase={uppercase}
            lowercase={lowercase}
            onClick={onClick}
            extended={extended}
            centered={centered}
          />
        </div>
      ))}
    </div>
  );
}

ButtonsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    details: PropTypes.string,
  })).isRequired,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  extended: PropTypes.bool,
  onClick: PropTypes.func,
  centered: PropTypes.bool,
};
ButtonsList.defaultProps = {
  uppercase: false,
  lowercase: false,
  capitalize: false,
  extended: false,
  centered: false,
  onClick: null,
};

export default ButtonsList;
