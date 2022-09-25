import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';
import FullView from './FullView';
import SmallTitle from './UI/SmallTitle';
import Panel from './UI/Panel';

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
          <SmallTitle text={t('home.resume.experience')} left />
          <Panel
            title={['Freelance', 'VO2-Group', 'Uber', 'McDonald\'s']}
            subtitle={['dev1', 'dev2', 'courier', 'crewmate']}
            startDate={['August 2021', 'January 2021', 'February 2021', 'March 2021']}
            endDate={['August 2021', 'January 2021', 'February 2021', 'March 2021']}
            description={[['task1.1', 'task1.2'], ['task2.1', 'task2.2'], ['task3.1', 'task3.2'], ['task4.1', 'task4.2']]}
          />
        </div>

        <div style={{ marginBottom: '100vh' }} />
      </Layout>
    </>
  );
}

export default Home;
