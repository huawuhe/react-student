import { type ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 6,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  components: {
    Button: {
      colorPrimary: '#1890ff',
      algorithm: true,
    },
    Layout: {
      bodyBg: '#ffffff',
      headerBg: '#575e65ff',
    },
    Menu: {
      itemColor: '#666',
      itemHoverColor: '#1890ff',
      itemHoverBg: '#f0f8ff',
      itemSelectedColor: '#fff',
      itemSelectedBg: '#1890ff',
      itemBorderRadius: 0,
      itemMarginBlock: 4,
      itemMarginInline: 0,
    },
  },
};
