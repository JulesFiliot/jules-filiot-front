import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { setHasFullView } from '../actions/dataActions';
import applyTextStyle from '../utils/textProcessing';
import Button from './UI/Button';

import '../styles/fullView.scss';

// welcome view taking full screen on website load
function FullView({ children }) {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { myInfo } = useSelector((state) => state.data);
  const hasFullView = useSelector((state) => state.hasFullView);
  const [isAnimated, setIsAnimated] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [hideLangAnime, setHideLangAnime] = useState(false);

  const languages = [
    { label: t('header.fr'), key: 'fr' },
    { label: t('header.en'), key: 'en' },
  ];

  const displayHideAnime = () => {
    setHideLangAnime(true);
    setTimeout(() => setHideLangAnime(false), 500);
  };

  const handleClickOutside = () => {
    if (showLangDropdown) {
      displayHideAnime();
      setShowLangDropdown(false);
    }
  };

  return (
    <>
      <div className={`fullView${isAnimated ? ' dive-in' : ''}${!hasFullView ? ' hidden' : ''}`}>
        <div className="content-container">
          <h1 className="mainMessage">
            {
            t('home.fullView.mainMessage')
              .replace('{{firstName}}', myInfo.firstName)
              .replace('{{lastName}}', myInfo.lastName)
          }
          </h1>
          <ul>
            {myInfo.sumUpInfo.map((info) => (
              <li key={info.en}>{applyTextStyle(info[i18n.language.toLowerCase()])}</li>
            ))}
          </ul>
          <Button
            capitalize
            negative
            label={t('home.fullView.buttonText')}
            onClick={() => {
              setIsAnimated(true);
              setTimeout(() => {
                dispatch(setHasFullView(false));
              }, 1000);
            }}
          />
          <div
            key={i18n.language}
            className="langBtn"
            onClick={() => {
              if (showLangDropdown) displayHideAnime();
              setShowLangDropdown(!showLangDropdown);
            }}
            onKeyDown={() => {
              if (showLangDropdown) displayHideAnime();
              setShowLangDropdown(!showLangDropdown);
            }}
            onBlur={() => handleClickOutside()}
            role="button"
            tabIndex={0}
          >
            <span>{languages.find((l) => l.key === i18n.language).label}</span>
            <div className="underline" />
          </div>
          <div
            className={`fv-lang-dropdown-container${showLangDropdown ? ' display' : ''}${hideLangAnime ? ' hide-anime' : ''}`}
          >
            {languages.map((lang) => (
              <div
                key={lang.key}
                className="lang-dropdown-item"
                onClick={() => i18n.changeLanguage(lang.key)}
                onKeyDown={() => i18n.changeLanguage(lang.key)}
                role="button"
                tabIndex={0}
              >
                <div className="lang-content-container">
                  <span>{lang.label}</span>
                  <div className="underline" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`content-to-reveil${(!hasFullView || isAnimated) ? ' is-shown' : ''}`}>
        {children}
      </div>
    </>
  );
}

FullView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullView;
