import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';
import SmallTitle from './UI/SmallTitle';
import Panel from './UI/Panel';
import ButtonsList from './ButtonsList';

function Resume() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="section">
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
            ['Full stack cooker', 'Web app maintenance', 'Development of new features'],
          ]}
        />
      </div>
      <div className="section">
        <SmallTitle text={t('home.resume.topSkills')} marginBottom={20} right />
        <ButtonsList
          capitalize
          data={[
            { id: 1, title: 'React', details: 'Refined react skills for over a year and a half' },
            { id: 2, title: 'NestJS', details: 'Refined nestjs skills for over a year and a half Strong css knowledge with a many hours of experience. This text is very long for no reason, I just want to test my component so I have to write a very very veryyyyy long description to see how it behaves' },
            { id: 3, title: 'css', details: 'Strong css knowledge with a many hours of experience. This text is very long for no reason, I just want to test my component so I have to write a very very veryyyyy long description to see how it behaves' },
          ]}
        />
      </div>
      <div className="section">
        <SmallTitle text={t('home.resume.education')} marginBottom={20} left />
        <Panel
          title={['CPE Lyon', 'Institution des chartreux']}
          subtitle={['Graduate school of digital science', 'Preparation class for CPE Lyon']}
          startDate={['2019', '2017']}
          endDate={['2023', '2019']}
          description={[
            ['Gang member', 'Crypto lord', 'Fun provider'],
            ['Serial lover', 'Work zombie'],
          ]}
        />
      </div>
      <div className="section">
        <SmallTitle text={t('home.resume.languages')} marginBottom={20} right />
        <ButtonsList
          extended
          capitalize
          data={[
            { id: 1, title: 'French', details: 'Native' },
            { id: 2, title: 'English', details: 'Full professional proficiency' },
            { id: 3, title: 'German', details: 'Medium level' },
            { id: 4, title: 'Russian', details: 'Elementary proficiency' },
            { id: 5, title: 'Japanese', details: 'Elementary proficiency' },
          ]}
        />
      </div>
    </Layout>
  );
}
export default Resume;
