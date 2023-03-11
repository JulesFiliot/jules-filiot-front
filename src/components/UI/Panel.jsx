/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../styles/UI/panel.scss';

function Panel({
  title, subtitle, startDate, endDate, description,
}) {
  const [selectedTitle, setSelectedTitle] = useState(0);

  return (
    <div className="panelContainer">
      <div className="timeStampsList">
        {title.map((t, index) => (
          <button
            key={`${t}-${index}`}
            type="button"
            className={selectedTitle === index ? 'selected' : ''}
            onClick={() => setSelectedTitle(index)}
          >
            <span>{t}</span>
          </button>
        ))}
      </div>
      <div className="timeStampDetails">
        <span className="subtitle">{subtitle[selectedTitle]}</span>
        <span className="dates">
          {startDate[selectedTitle]}
          {endDate[selectedTitle] && ` - ${endDate[selectedTitle]}`}
        </span>
        {description[selectedTitle] && (
        <ul className="description">
          {description[selectedTitle]?.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)}
        </ul>
        )}
      </div>
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitle: PropTypes.arrayOf(PropTypes.string),
  startDate: PropTypes.arrayOf(PropTypes.string).isRequired,
  endDate: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

Panel.defaultProps = {
  subtitle: [],
  endDate: [],
  description: [],
};

export default Panel;
