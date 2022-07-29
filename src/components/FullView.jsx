import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fullView.scss';

// welcome view taking full screen on website load
function FullView() {
  const { t } = useTranslation();

  return (
    <div className="fullView">
      <h1 className="mainMessage">{t('home.fullView.mainMessage')}</h1>
    </div>
  );
}

export default FullView;
