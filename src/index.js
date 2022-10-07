import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
// import Dashboard from './pages/Dashboard/Dashboard';
import TodoList from './pages/TodoList/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    {/* <Dashboard /> */}
    <TodoList/>
  </React.StrictMode>
);

