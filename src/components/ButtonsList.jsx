import React from 'react';
import PropTypes from 'prop-types';
import '../styles/buttonsList.scss';
import ExtendedButton from './UI/ExtendedButton';

function ButtonsList({
  data, uppercase, lowercase, capitalize, onClick, extended,
}) {
  return (
    <div className="buttonsListContainer">
      {data.map(({ id, title, details }) => (
        <ExtendedButton
          key={id}
          label={title}
          text={details}
          capitalize={capitalize}
          uppercase={uppercase}
          lowercase={lowercase}
          onClick={onClick}
          extended={extended}
        />
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
};
ButtonsList.defaultProps = {
  uppercase: false,
  lowercase: false,
  capitalize: false,
  extended: false,
  onClick: null,
};

export default ButtonsList;
