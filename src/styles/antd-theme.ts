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
      bodyBg: '#fff',
      headerBg: '#fff',
      siderBg: '#304156',
    },
    Menu: {
      itemBg: '#304156',
      itemColor: '#fff',
      itemDisabledColor: '#fff',
      itemSelectedColor: '#1890ff',
      itemHoverBg: '#001528',
      itemHoverColor: '#fff',
      itemActiveBg: '#1f2d3d',
      itemSelectedBg: '#1f2d3d',
      subMenuItemSelectedColor: '#fff',
      subMenuItemBg: '#1f2d3d',
      subMenuItemHoverBg: '#304156',
      itemBorderRadius: 0,
      itemMarginBlock: 0,
      itemMarginInline: 0,
    },
  },
};
