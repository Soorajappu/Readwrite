import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import './i18n'; // Import the i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
    </React.StrictMode>
  </Router>
  
)
