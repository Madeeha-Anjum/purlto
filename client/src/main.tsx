import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/css/index.css';
import App from './App';
import PageNotFound from './error-page';
import Feedback from './pages/Feedback';

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
    path: '*',
    element: <PageNotFound />,
  },
]);

root.render(<RouterProvider router={router} />);
