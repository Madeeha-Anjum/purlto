import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './assets/css/index.css';
import App from './App';
import PageNotFound from './error-page';
import Feedback from './pages/Feedback';
import Redirect, { loader as redirectLoader } from './pages/Redirect';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/feedback',
    element: <Feedback />,
  },
  {
    path: '/404',
    element: <PageNotFound />,
  },
  {
    path: '/:slug',
    element: <Redirect />,
    loader: redirectLoader,
  },
  {
    path: '*',
    element: <Navigate to='/404' />,
  },
]);

root.render(<RouterProvider router={router} />);
