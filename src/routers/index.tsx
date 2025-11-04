import { type RouteObject, useRoutes } from 'react-router-dom';
import HomeView from '@/views/HomeView';
import About from '@/views/AboutView';
import AppLayout from '@/components/layout';

const constantRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
];

const Router = () => {
  const routes = useRoutes(constantRoutes);
  return routes;
};

export default Router;
