/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import moment from 'moment';

import '../../styles/UI/panel.scss';

function Panel({
  title, subtitle, startDate, endDate, description, location,
}) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language.toLowerCase();
  const [selectedTitle, setSelectedTitle] = useState(0);

  return (
    <div className="panelContainer">
      <div className="timeStampsList">
        {title.map((ti, index) => (
          <button
            key={`${ti}-${index}`}
            type="button"
            className={selectedTitle === index ? 'selected' : ''}
            onClick={() => setSelectedTitle(index)}
          >
            <span>{ti}</span>
          </button>
        ))}
      </div>
      <div className="timeStampDetails">
        <span className="subtitle">{subtitle[selectedTitle]}</span>
        <span className="dates">
          {moment(startDate[selectedTitle]).locale(lang).format('MMM YYYY')}
          {
            endDate[selectedTitle]
              ? ` - ${`${moment(endDate[selectedTitle]).locale(lang).format('MMM YYYY')}`}`
              : ` - ${t('panel.present')}`
          }
        </span>
        <span className="location">{location[selectedTitle]}</span>
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
  location: PropTypes.arrayOf(PropTypes.string),
};

Panel.defaultProps = {
  subtitle: [],
  endDate: [],
  description: [],
  location: [],
};

export default Panel;
