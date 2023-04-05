import React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/footer.scss';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="text">
        <p>{t('footer.madeBy')}</p>
      </div>
    </footer>
  );
}
export default Footer;
