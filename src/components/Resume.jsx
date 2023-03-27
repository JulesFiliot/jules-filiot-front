import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';
import SmallTitle from './UI/SmallTitle';
import Panel from './UI/Panel';
import ButtonsList from './ButtonsList';
import ProjectDisplay from './UI/ProjectDisplay';

import '../styles/resume.scss';

function Resume() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.toLowerCase();
  const { categories, panels, projects } = useSelector((state) => state.data);
  const [dataToRenderLength, setDataToRenderLength] = useState(0);

  const renderCategory = (cat) => (
    <div key={cat.id} className="section">
      <SmallTitle text={cat.title[lang]} marginBottom={20} right />
      <ButtonsList
        extended={cat.extended}
        capitalize
        data={cat.skills?.map((skill) => ({
          id: skill.id,
          title: skill.title[lang],
          details: skill.description[lang],
        }))}
      />
    </div>
  );

  const renderPanel = (panel) => {
    const sortedPanelEntries = panel?.panelEntries?.sort((a, b) => {
      const aDate = new Date(a.startDate);
      const bDate = new Date(b.startDate);
      return aDate - bDate;
    });

    return (
      <div key={panel.id} className="section">
        <SmallTitle text={panel.title[lang]} marginBottom={20} left />
        <Panel
          title={sortedPanelEntries?.map((entry) => entry.title[lang])}
          subtitle={sortedPanelEntries?.map((entry) => entry.subtitle[lang])}
          startDate={sortedPanelEntries?.map((entry) => entry.startDate)}
          endDate={sortedPanelEntries?.map((entry) => entry.endDate)}
          description={
          sortedPanelEntries?.map((entry) => entry.description.map((desc) => desc[lang]))
        }
        />
      </div>
    );
  };

  const renderProjectDisplay = (project) => (
    <ProjectDisplay
      key={project.id}
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
      customClass="resume-project"
    />
  );

  const renderData = () => {
    const dataToRender = [];
    let panelIndex = 0;
    let categoryIndex = 0;

    if (dataToRenderLength === 0) return (<p>{t('general.noData')}</p>);

    for (let i = 0; i < dataToRenderLength; i += 1) {
      const isPanelToRender = typeof categories[categoryIndex] === 'undefined'
        || (i % 2 === 0 && typeof panels[panelIndex] !== 'undefined');

      if (isPanelToRender) {
        dataToRender.push(renderPanel(panels[panelIndex]));
        panelIndex += 1;
      } else {
        const currentCategory = categories[categoryIndex];
        const isLanguageCat = currentCategory?.title?.en?.toLowerCase() === 'languages';

        dataToRender.push(renderCategory({
          ...currentCategory,
          extended: isLanguageCat,
        }));
        categoryIndex += 1;
      }
    }

    // add projects to render data
    if (projects && projects.length) {
      dataToRender.push(
        <div className="section">
          <SmallTitle text={t('resume.projects')} marginBottom={20} left />
          {projects.map((proj) => renderProjectDisplay(proj))}
        </div>,
      );
    }

    return dataToRender;
  };

  useEffect(() => {
    setDataToRenderLength(categories.length + panels.length);
  }, [categories, panels]);

  return (
    <Layout>{renderData()}</Layout>
  );
}
export default Resume;
