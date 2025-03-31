import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
} from './pages';

import { action as addEventAction } from './pages/AddEvent';
import { loader as eventsLoader } from './pages/Events';
import { loader as knowledgeLoader } from './pages/Knowledge';
import { loader as innovationsLoader } from './pages/Innovations';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as profileAction } from './pages/Profile';
import { loader as adminLoader } from './pages/Admin';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
    },
  },
});



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
        action: loginAction(queryClient),
      },
      {
        path: 'dashboard',
        element: <DashboardLayout  />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddEvent />,  
            action: addEventAction(queryClient), 
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction(queryClient),
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;