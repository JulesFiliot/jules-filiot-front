import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/header.scss';

function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [hideAnime, setHideAnime] = useState(false);
  const dropdownRef = useRef(null);
  const langBtnRef = useRef(null);

  const navItems = [
    { label: t('header.home'), link: '/home' },
    { label: t('header.resume'), link: '/resume' },
    { label: t('header.contact'), link: '/reachme' },
  ];
  const languages = [
    { label: t('header.fr'), key: 'fr' },
    { label: t('header.en'), key: 'en' },
  ];

  // redirect user to specified site link & scroll to top if cleanRedirect is true
  const redirect = (redirectTo, cleanRedirect = true) => {
    if (cleanRedirect) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return navigate(redirectTo);
  };

  const displayHideAnime = () => {
    setHideAnime(true);
    setTimeout(() => setHideAnime(false), 500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current
        && !dropdownRef.current.contains(event.target)
        && !langBtnRef.current.contains(event.target)
      ) {
        if (showLangDropdown) {
          displayHideAnime();
          setShowLangDropdown(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="header-container">
      <nav className="navContainer">
        <div className="nav">
          {
        navItems.map((item, i) => (
          <div
            key={`${item.link}`}
            className={`navItem${i === 0 ? ' first' : ''}${location.pathname === item.link ? ' active' : ''}`}
            onClick={() => redirect(item.link)}
            onKeyDown={() => redirect(item.link)}
            role="button"
            tabIndex={0}
          >
            <span>{item.label}</span>
            <div className="underline" />
          </div>
        ))
      }
        </div>
        <div
          ref={langBtnRef}
          key={i18n.language}
          className="navItem langBtn"
          onClick={() => {
            if (showLangDropdown) displayHideAnime();
            setShowLangDropdown(!showLangDropdown);
          }}
          onKeyDown={() => {
            if (showLangDropdown) displayHideAnime();
            setShowLangDropdown(!showLangDropdown);
          }}
          role="button"
          tabIndex={0}
        >
          <span>{languages.find((l) => l.key === i18n.language).label}</span>
          <div className="underline" />
        </div>
      </nav>
      <div
        ref={dropdownRef}
        className={`lang-dropdown-container${showLangDropdown ? ' display' : ''}${hideAnime ? ' hide-anime' : ''}`}
      >
        {languages.map((lang) => (
          <div
            key={lang.key}
            className="lang-dropdown-item"
            onClick={() => {
              i18n.changeLanguage(lang.key); setShowLangDropdown(false); displayHideAnime();
            }}
            onKeyDown={() => {
              i18n.changeLanguage(lang.key); setShowLangDropdown(false); displayHideAnime();
            }}
            role="button"
            tabIndex={0}
          >
            <div className="content-container">
              <span>{lang.label}</span>
              <div className="underline" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
