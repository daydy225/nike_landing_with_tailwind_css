import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initReactI18next } from 'react-i18next'
import enTranslation from '../locales/en.json'
import frTranslation from '../locales/fr.json'
import i18n from 'i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: 'fr', // Set the default language
  fallbackLng: 'en', // Fallback language if translation not found
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
