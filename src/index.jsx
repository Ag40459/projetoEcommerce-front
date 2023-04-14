import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main/main';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProviderNavBar } from './contexts/UserContextNavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProviderNavBar>
        <Main />
      </UserProviderNavBar>
    </BrowserRouter>
  </React.StrictMode>
)
