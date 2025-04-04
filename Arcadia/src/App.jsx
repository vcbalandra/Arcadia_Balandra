import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthProvider } from './context/AuthContext';

import {
  HomeLayout,
  Events,
  Knowledge,
  Innovations,
  Landing,
  Error,
  DashboardLayout,
  Admin,
  Profile,
  Register,
  Login,
  AddEvent,
  AllEvents,
} from './pages';

import { loader as allEventsLoader } from './pages/AllEvents';
import { loader as eventsLoader } from './pages/Events';
import { loader as knowledgeLoader } from './pages/Knowledge';
import { loader as innovationsLoader } from './pages/Innovations';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as profileAction } from './pages/Profile';
import { loader as adminLoader } from './pages/Admin';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
// import PrivateRoute from './components/PrivateRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
    },
  },
});

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: 'register',
          element: <Register />,
          action: registerAction,
        },
        {
          path: 'login',
          element: <Login />,
          action: loginAction,
        },
        {
          path: 'dashboard',
          element: <DashboardLayout queryClient={queryClient} />,
          loader: dashboardLoader(queryClient),
          children: [
            {
              index: true,
              element: <AddEvent />,
            },
            {
              path: 'add-event',
              element: <AddEvent />,
            },
            {
              path: 'all-events',
              element: <AllEvents />,
              loader: allEventsLoader,
              errorElement: <Error />,
            },
            {
              path: 'profile',
              element: <Profile />,
              action: profileAction,
            },
            {
              path: 'admin',
              element: <Admin />,
              loader: adminLoader,
            },
          ],
        },
        {
          path: '/events-collaboration',
          element: <Events />,
          loader: eventsLoader,
        },
        {
          path: '/knowledge-hub',
          element: <Knowledge />,
          loader: knowledgeLoader,
        },
        {
          path: '/innovation-solutions-exchange',
          element: <Innovations />,
          loader: innovationsLoader,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;