import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './layouts/app-layout';
import LandingPage from './pages/landing';
import Dashboard from './pages/Dashboard';
import AuthPage from './pages/auth';
import LinkPage from './pages/Link';
import RedirectLink from './pages/redirect-link';
import UrlProvider from './pages/context';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/auth',
        element: <AuthPage />
      },
      {
        path: '/link/:id',
        element: <LinkPage />
      },
      {
        path: '/:id',
        element: <RedirectLink />
      }
    ]
  }
]);

const App = () => {
  return <UrlProvider>
      <RouterProvider router={router} />;

  </UrlProvider>

};

export default App;
