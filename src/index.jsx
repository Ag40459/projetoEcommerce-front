import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/routes/routes';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProviderNavBar } from './contexts/UserContextNavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProviderNavBar>
        <App />
      </UserProviderNavBar>
    </BrowserRouter>
  </React.StrictMode>
)
