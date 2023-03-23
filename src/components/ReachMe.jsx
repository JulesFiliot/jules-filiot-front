import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import LinkComp from './UI/LinkComp';
import Text from './UI/Text';

import '../styles/reachMe.scss';

function ReachMe() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.toLowerCase();
  const { myInfo } = useSelector((state) => state.data);

  return (
    <Layout>
      <div className="reach-me-container section full">
        <div className="content">
          <Text text={t('reachMe.hook')} />
          <div className="links-container">
            {
            myInfo.email
            && <LinkComp label={myInfo.email} url={`mailto:${myInfo.email}`} />
          }
            {
            myInfo.linkedInLink
            && <LinkComp label={myInfo.linkedInLink.title[lang]} url={myInfo.linkedInLink.url} />
          }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ReachMe;
