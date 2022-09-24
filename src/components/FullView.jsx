import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fullView.scss';

// welcome view taking full screen on website load
function FullView() {
  const { t } = useTranslation();

  return (
    <div className="fullView">
      <h1 className="mainMessage">{t('home.fullView.mainMessage')}</h1>
      <ul>
        <li>{t('home.fullView.subMessage1')}</li>
        <li>{t('home.fullView.subMessage2')}</li>
      </ul>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        {t('home.fullView.buttonText')}
      </button>
    </div>
  );
}

export default FullView;
