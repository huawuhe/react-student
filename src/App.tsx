import { HashRouter } from 'react-router-dom';
import Router from '@/routers';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { GlobalStyles } from './styles/GlobalStyles';
import { antdTheme } from '@/styles/antd-theme';
function App() {
  return (
    <ConfigProvider locale={zhCN} theme={antdTheme}>
      <GlobalStyles />
      <HashRouter>
        <Router />
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
