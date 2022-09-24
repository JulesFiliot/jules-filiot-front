import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';
import FullView from './FullView';
import Title from './UI/Title';
import Subtitle from './UI/Subtitle';

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <FullView />
      <Layout>
        <Title text={t('header.resume')} marginBottom={50} />

        <div>
          <Subtitle text={t('home.resume.experience')} />
        </div>

        <div style={{ marginBottom: '100vh' }}>
          <button type="button" onClick={() => i18n.changeLanguage('fr')}>FR</button>
          <button type="button" onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>
      </Layout>
    </>
  );
}

export default Home;
