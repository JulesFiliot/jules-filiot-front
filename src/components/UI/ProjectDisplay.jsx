import React from 'react';
import PropTypes from 'prop-types';
import LinkComp from './LinkComp';
import Image from './Image';

import '../../styles/UI/projectDisplay.scss';

function ProjectDisplay({
  title, description, gitLink, otherLinks, imgData, customClass,
}) {
  return (
    <div className={`project-display-container${customClass ? ` ${customClass}` : ''}`}>
      <div className="content">
        <div className="project-title">{title}</div>
        <div className="separator" />
        <div className="project-description">{description}</div>
        <div className="project-links">
          {gitLink && <LinkComp label={gitLink.title} url={gitLink.url} />}
          {otherLinks && otherLinks.map((link) => (
            <LinkComp key={`${link.title}-${link.url}`} label={link.title} url={link.url} />
          ))}
        </div>
      </div>
      {imgData && <Image alt={imgData.alt} src={imgData.src} />}
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
};
ProjectDisplay.defaultProps = {
  gitLink: null,
  otherLinks: null,
  imgData: null,
  customClass: null,
};

export default ProjectDisplay;
