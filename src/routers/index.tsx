import { type RouteObject, useRoutes } from 'react-router-dom';
import HomeView from '@/views/HomeView';

const constantRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomeView />,
  },
];

const Router = () => {
  const routes = useRoutes(constantRoutes);
  return routes;
};

export default Router;
