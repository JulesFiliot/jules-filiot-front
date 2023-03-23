import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { ReactComponent as LinkSvg } from '../../icons/link.svg';
import { ReactComponent as AtSvg } from '../../icons/at.svg';

import '../../styles/UI/linkComp.scss';

function LinkComp({
  url, label, uppercase, lowercase, capitalize, negative, linkIcon, atIcon,
}) {
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    if (linkIcon) {
      setSvg(<LinkSvg />);
    } else if (atIcon) {
      setSvg(<AtSvg />);
    } else {
      setSvg(null);
    }
  }, [linkIcon, atIcon]);

  return (
    <div className="link-container">
      {svg && <Icon svgSrc={svg} />}
      <a
        className={`defaultLink${uppercase ? ' uppercase' : ''}${lowercase ? ' lowercase' : ''}${capitalize ? ' capitalize' : ''}${negative ? ' negative' : ''}`}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    </div>

  );
}

LinkComp.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  negative: PropTypes.bool,
  linkIcon: PropTypes.bool,
  atIcon: PropTypes.bool,
};
LinkComp.defaultProps = {
  uppercase: false,
  lowercase: false,
  capitalize: false,
  negative: false,
  linkIcon: false,
  atIcon: false,
};

export default LinkComp;
