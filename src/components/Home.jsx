import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';
import FullView from './FullView';
import SmallTitle from './UI/SmallTitle';
import Panel from './UI/Panel';

import '../styles/home.scss';

const itImage1 = require('../images/it_minimalist_compressed.jpg');

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <FullView />
      <Layout>
        <div>
          <button type="button" onClick={() => i18n.changeLanguage('fr')}>FR</button>
          <button type="button" onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>
        <div>
          <SmallTitle text={t('home.resume.experience')} marginBottom={20} left />
          <Panel
            title={['Freelance', 'VO2-Group', 'Uber', 'McDonald\'s']}
            subtitle={['Fullstack developer', 'Frontend developer', 'courier', 'crewmate']}
            startDate={['August 2021', 'January 2021', 'February 2021', 'March 2021']}
            endDate={['Present', 'January 2021', 'February 2021', 'March 2021']}
            description={[
              ['Full stack development using React framework for JavaScript and Nest.js framework for Node.js', 'Web app maintenance', 'Development of new features'],
              ['Full stack plumber using React framework for JavaScript and Nest.js framework for Node.js', 'Web app maintenance', 'Development of new features'],
              ['Full stack firefighter using React framework for JavaScript and Nest.js framework for Node.js', 'Web app maintenance', 'Development of new features'],
              ['Full stack cooker using React framework for JavaScript and Nest.js framework for Node.js', 'Web app maintenance', 'Development of new features'],
            ]}
          />
          <img src={itImage1} className="homeImage" alt="computer on desk" />
        </div>

        <div style={{ marginBottom: '100vh' }} />
      </Layout>
    </>
  );
}

export default Home;
