import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import common_fr from "./translation/fr.json";
import common_en from "./translation/en.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    fr: {
      common: common_fr
    },
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);

registerServiceWorker();
