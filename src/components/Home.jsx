import React from 'react';
import Layout from './Layout';
import FullView from './FullView';
import Text from './UI/Text';

import '../styles/home.scss';

// const itImage1 = require('../images/it_minimalist_compressed.jpg');

function Home() {
  return (
    <>
      <FullView />
      <Layout>
        <div className="full section">
          <Text text="This website is a front cover of me, Jules. The goal is to give you a glance at who I am, what my skills are and what I'm looking for right now.\nI'm a softwear engineer currently working at PLEN ROBOTICS in Osaka, Japan. I have more than two years of professional experience in web development and strong full stack development skills. I genuinly love working in IT, I find it very challenging and fast moving which is a good thing to never get bored and keep being excited to get better and learn new things every day. I want to build my carreer in the crypto-currencies space because I find the technologies developed in this world ground breaking and game changer for our tech world. Feel free to browse my website and contact me if you have any question or offer, I will be glad to answer.\nHave a beautiful day!" />
        </div>
      </Layout>
    </>
  );
}

export default Home;
