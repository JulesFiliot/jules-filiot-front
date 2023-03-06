import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './UI/Button';
import '../styles/fullView.scss';

// const backgroundImage = require('../images/lyon_blackwhite.jpg');

// welcome view taking full screen on website load
function FullView() {
  const { t } = useTranslation();

  return (
    <div className="fullView">
      <div className="content-container">
        <h1 className="mainMessage">{t('home.fullView.mainMessage')}</h1>
        <ul>
          <li>{t('home.fullView.subMessage1')}</li>
          <li>{t('home.fullView.subMessage2')}</li>
        </ul>
        <Button
          capitalize
          negative
          label={t('home.fullView.buttonText')}
          onClick={() => window.scrollTo({ top: window.innerHeight + 10, behavior: 'smooth' })}
        />
      </div>
    </div>
  );
}

export default FullView;
