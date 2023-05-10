import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import FullView from './FullView';
import Text from './UI/Text';
import Image from './UI/Image';

import '../styles/home.scss';

const meImg = require('../images/self-pic.jpg');

function Home() {
  const { i18n } = useTranslation();
  const { fullInfo } = useSelector((state) => state.data.myInfo);

  return (
    <Layout>
      <FullView />
      <div className="full section">
        <div className="home-container">
          <div className="info-container">
            {fullInfo.map((info, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Text key={`${info.en}-${i}`} text={info[i18n.language.toLowerCase()]} />
            ))}
          </div>
          <Image src={meImg} alt="my face" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
