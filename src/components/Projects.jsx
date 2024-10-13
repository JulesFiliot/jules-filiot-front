import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Layout from './Layout';
import ProjectDisplay from './UI/ProjectDisplay';

import '../styles/projects.scss';

function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.toLowerCase();
  const { projects } = useSelector((state) => state.data);

  const renderProjectDisplay = (project) => (
    <ProjectDisplay
      key={`${project.id}-project`}
      title={project.title[lang]}
      description={project.description[lang]}
      gitLink={project.gitLink ? {
        title: project.gitLink.title[lang],
        url: project.gitLink.url,
      } : null}
      otherLinks={project.usefulLinks.map((link) => ({
        title: link.title[lang],
        url: link.url,
      }))}
      tags={project.tags}
      customClass="project"
    />
  );

  const renderProjects = () => {
    const sortedProjects = projects?.sort((a, b) => b.priority - a.priority);

    if (!sortedProjects || sortedProjects.length === 0) {
      return <p>{t('general.noData')}</p>;
    }

    return (
      <div className="section">
        <p className="projects-description">{t('projects.description')}</p>
        {sortedProjects.map((proj) => renderProjectDisplay(proj))}
      </div>
    );
  };

  return (
    <Layout>{renderProjects()}</Layout>
  );
}

export default Projects;
