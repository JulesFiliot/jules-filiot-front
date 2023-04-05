import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from './UI/Button';
import '../styles/fullView.scss';

// welcome view taking full screen on website load
function FullView() {
  const { t, i18n } = useTranslation();
  const { myInfo } = useSelector((state) => state.data);

  return (
    <div className="fullView">
      <div className="content-container">
        <h1 className="mainMessage">
          {
            t('home.fullView.mainMessage')
              .replace('{{firstName}}', myInfo.firstName)
              .replace('{{lastName}}', myInfo.lastName)
          }
        </h1>
        <ul>
          {myInfo.sumUpInfo.map((info) => (
            <li key={info.en}>{info[i18n.language.toLowerCase()]}</li>
          ))}
        </ul>
        <Button
          capitalize
          negative
          label={t('home.fullView.buttonText')}
          onClick={() => window.scrollTo({ top: window.innerHeight + 10, behavior: 'smooth' })}
        />
      </div>
    </div>
  );
}

export default FullView;
