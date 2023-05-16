import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { setHasFullView } from '../actions/dataActions';
import Button from './UI/Button';

import applyTextStyle from '../utils/textProcessing';

import '../styles/fullView.scss';

// welcome view taking full screen on website load
function FullView({ children }) {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { myInfo } = useSelector((state) => state.data);
  const hasFullView = useSelector((state) => state.hasFullView);
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <>
      <div className={`fullView${isAnimated ? ' dive-in' : ''}${!hasFullView ? ' hidden' : ''}`}>
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
              <li key={info.en}>{applyTextStyle(info[i18n.language.toLowerCase()])}</li>
            ))}
          </ul>
          <Button
            capitalize
            negative
            label={t('home.fullView.buttonText')}
            onClick={() => {
              setIsAnimated(true);
              setTimeout(() => {
                dispatch(setHasFullView(false));
              }, 1000);
            }}
          />
        </div>
      </div>
      <div className={`content-to-reveil${(!hasFullView || isAnimated) ? ' is-shown' : ''}`}>
        {children}
      </div>
    </>
  );
}

FullView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullView;
