import React from 'react';
import Layout from './Layout';
import FullView from './FullView';
import SmallTitle from './UI/SmallTitle';

import '../styles/home.scss';

// const itImage1 = require('../images/it_minimalist_compressed.jpg');

function Home() {
  return (
    <>
      <FullView />
      <Layout>
        <div className="section">
          <SmallTitle text="hi" marginBottom={20} left />
        </div>

        <div style={{ marginBottom: '90vh' }} />
      </Layout>
    </>
  );
}

export default Home;
