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

  return (
    <nav className="nav">
      {
        navItems.map((item) => (
          <div
            key={`${item.label}`}
            className="navItem"
          >
            {item.label}
          </div>
        ))
      }
    </nav>
  );
}

export default Header;
