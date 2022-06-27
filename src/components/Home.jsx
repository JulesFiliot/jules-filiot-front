import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div>
        <h1>{t('home.welcomeMsg')}</h1>
        <button type="button" onClick={() => i18n.changeLanguage('fr')}>FR</button>
        <button type="button" onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
    </Layout>
  );
}

export default Home;
