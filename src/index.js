import React from 'react';
import ReactDOM from 'react-dom/client';

//css
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
import Header from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import TodoList from './pages/TodoList/TodoList';
import ErrorPage from './components/Error';


//Route
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "detail/:detailId",
    element: <TodoList />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

