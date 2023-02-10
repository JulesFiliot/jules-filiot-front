import React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/footer.scss';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <p>{t('footer.madeBy')}</p>
    </footer>
  );
}
export default Footer;
