import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import FullView from './FullView';
import Text from './UI/Text';
import Image from './UI/Image';

import '../styles/home.scss';

const codeLinesImg = require('../images/code_lines_bw_cropped.jpg');

function Home() {
  const { i18n } = useTranslation();
  const { fullInfo } = useSelector((state) => state.data.myInfo);

  return (
    <>
      <FullView />
      <Layout>
        <div className="full section">
          <div className="home-container">
            <div className="info-container">
              {fullInfo.map((info, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Text key={`${info.en}-${i}`} text={info[i18n.language.toLowerCase()]} />
              ))}
            </div>
            <Image src={codeLinesImg} alt="code lines black and white" customClass="illustration-img" />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
