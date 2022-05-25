import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.welcomeMsg')}</h1>
    </div>
  );
}

export default Home;