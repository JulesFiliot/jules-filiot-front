import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from './UI/Button';
import { setHasFullView } from '../actions/dataActions';

import '../styles/fullView.scss';

// welcome view taking full screen on website load
function FullView() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { myInfo } = useSelector((state) => state.data);
  const hasFullView = useSelector((state) => state.hasFullView);

  return (
    <div className={`fullView${!hasFullView ? ' hidden' : ''}`}>
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
          onClick={() => dispatch(setHasFullView(false))}
        />
      </div>
    </div>
  );
}

export default FullView;
