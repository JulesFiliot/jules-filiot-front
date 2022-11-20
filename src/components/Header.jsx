import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/header.scss';

function Header() {
  const { t } = useTranslation();

  const navItems = [
    { label: t('header.home'), link: '/' },
    { label: t('header.resume'), link: '/' },
    { label: t('header.contact'), link: '/' },
  ];
  const languages = [
    { label: t('header.fr'), key: 'fr' },
    { label: t('header.en'), key: 'en' },
  ];

  return (
    <nav className="navContainer">
      <div className="nav">
        {
        navItems.map((item, i) => (
          <div
            key={`${item.label}`}
            className={`navItem${i === 0 ? ' first' : ''}`}
          >
            {item.label}
          </div>
        ))
      }
      </div>
      <div
        key={`${languages[0].key}`}
        className="navItem langBtn"
      >
        {languages[0].label}
      </div>
    </nav>
  );
}

export default Header;
