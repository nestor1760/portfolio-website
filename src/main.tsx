import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import i18next from 'i18next'


import global_en from './translation/en/global.json'
import global_pl from './translation/pl/global.json'
import global_ua from './translation/ua/global.json'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  lng: 'en',
  interpolation: { escapeValue: false },
  fallbackLng: 'en',
  resources: {
    en: {
      global: global_en
    },
    pl: {
      global: global_pl
    },
    ua: {
      global: global_ua
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>
)
