import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Router from './components/Router';
import FullViewLoader from './components/FullViewLoader';
import dataReducer from './reducers/dataReducer';
import './i18n';
import 'moment/locale/fr';

import './fonts/Rubik/Rubik-Bold.ttf';
import './fonts/Rubik/Rubik-BoldItalic.ttf';
import './fonts/Rubik/Rubik-Italic.ttf';
import './fonts/Rubik/Rubik-Regular.ttf';
import './styles/index.scss';

const store = createStore(dataReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FullViewLoader>
          <Router />
        </FullViewLoader>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
