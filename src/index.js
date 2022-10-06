import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/header.css';
import './assets/css/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Dashboard />
  </React.StrictMode>
);

