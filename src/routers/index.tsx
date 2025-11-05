import { type RouteObject, useRoutes, Navigate } from 'react-router-dom';
import HomeView from '@/views/HomeView';
import About from '@/views/AboutView';
import AppLayout from '@/components/layout';
import Login from '@/views/login';

const constantRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" replace />, // 重定向到登录页
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/app',
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
  {
    path: '*',
    element: <div>404</div>,
  },
];

const Router = () => {
  const routes = useRoutes(constantRoutes);
  return routes;
};

export default Router;
