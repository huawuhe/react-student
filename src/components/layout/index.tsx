import React from 'react';
import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom'; // 重要：使用 Outlet 渲染子路由
const { Header, Content } = Layout;
import SiderComponent from './Sider';

interface AppLayoutProps {
  children?: React.ReactNode;
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 44,
  paddingInline: 48,
  lineHeight: '44px',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '100%',
  lineHeight: '120px',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
};
const AppLayout: React.FC<AppLayoutProps> = () => {
  const location = useLocation();
  console.log('当前路由:', location.pathname);
  return (
    <Layout style={layoutStyle}>
      <SiderComponent />
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
