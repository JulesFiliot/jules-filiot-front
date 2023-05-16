import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import LinkComp from './LinkComp';
import Image from './Image';

import applyTextStyle from '../../utils/textProcessing';

import '../../styles/UI/projectDisplay.scss';

function ProjectDisplay({
  title, description, gitLink, otherLinks, imgData, customClass, tags,
}) {
  const { t } = useTranslation();

  return (
    <div className={`project-display-container${customClass ? ` ${customClass}` : ''}`}>
      <div className="content">
        <div className="project-title">{title}</div>
        <div className="separator" />
        <div className="project-description">{applyTextStyle(description)}</div>
        {tags && tags.length && (
          <div className="project-tags">
            {tags.map((tag) => (<span key={`projdisp-${tag}-${title}`}>{tag?.toLowerCase()}</span>))}
          </div>
        )}
        <div className="project-links">
          {(gitLink || (otherLinks && otherLinks.length)) && (
            <>
              <div className="links-titles">{t('projectDisplay.links')}</div>
              <div className="separator tiny" />
            </>
          )}
          {gitLink && <LinkComp label={gitLink.title} url={gitLink.url} />}
          {otherLinks && otherLinks.map((link) => (
            <LinkComp key={`projdisplink-${link.title}-${link.url}`} label={link.title} url={link.url} />
          ))}
        </div>
      </div>
      {imgData && <Image alt={imgData.alt} src={imgData.src} customClass="project-image" />}
    </div>
  );
}

ProjectDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gitLink: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }),
  otherLinks: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  })),
  imgData: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  customClass: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};
ProjectDisplay.defaultProps = {
  gitLink: null,
  otherLinks: null,
  imgData: null,
  customClass: null,
  tags: null,
};

export default ProjectDisplay;
