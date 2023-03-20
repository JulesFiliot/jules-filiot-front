import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import '../styles/reachMe.scss';
import Layout from './Layout';
import LinkComp from './UI/LinkComp';
import Text from './UI/Text';

function ReachMe() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.toLowerCase();
  const { myInfo } = useSelector((state) => state.data);

  useEffect(() => console.log({ myInfo }), [myInfo]);

  return (
    <Layout>
      <div className="section full left">
        <Text text={t('reachMe.hook')} />
        {
          myInfo.email
          && <LinkComp label={myInfo.email} url={`mailto:${myInfo.email}`} />
        }
        {
          myInfo.linkedInLink
          && <LinkComp label={myInfo.linkedInLink.title[lang]} url={myInfo.linkedInLink.url} />
        }
      </div>
    </Layout>
  );
}

export default ReachMe;
