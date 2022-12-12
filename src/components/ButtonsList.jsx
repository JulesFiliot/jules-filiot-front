import React from 'react';
import PropTypes from 'prop-types';
import '../styles/buttonsList.scss';
import Button from './UI/Button';

function ButtonsList({ data }) {
  return (
    <div className="buttonListContainer">
      {data.map(({ id, title }) => (
        <Button key={id} label={title} capitalize />
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
};

export default ButtonsList;
