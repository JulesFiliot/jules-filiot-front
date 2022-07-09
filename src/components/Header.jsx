import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/header.scss';

function Header() {
  const { t } = useTranslation();
  const URLPath = window.location.pathname?.split('/')[1];

  const navItems = [
    { label: t('header.home'), link: '/home' },
    {
      label: t('header.resume'),
      pathRoot: 'resume',
      isDropdown: true,
      items: [
        { label: t('header.experience'), link: '/resume/experience' },
        { label: t('header.education'), link: '/resume/education' },
        { label: t('header.skills'), link: '/resume/skills' },
      ],
    },
    { label: t('header.contact'), link: '/reachme' },
  ];

  return (
    <nav className="nav">
      {
        navItems.map((item) => (
          <div
            key={`${item.label}`}
            className="navItem"
          >
            {!item.isDropdown ? (
              <NavLink to={item.link || '/'} className={({ isActive }) => (isActive ? 'active label' : 'label')}>
                {item.label}
              </NavLink>
            ) : (
              <div className={URLPath === item.pathRoot ? 'active label' : 'label'}>
                {item.label}
              </div>
            )}
          </div>
        ))
      }
    </nav>
  );
}

export default Header;
