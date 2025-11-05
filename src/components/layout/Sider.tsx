import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import styles from './layout.module.less';
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const siderStyle: React.CSSProperties = {
  minHeight: 380,
  color: '#fff',
};
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];
const SiderComponent = () => {
  return (
    <Sider width={210} style={siderStyle}>
      <div className={styles.logo}>宿舍管理系统</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        className={styles.customMenu}
        items={items}
      ></Menu>
    </Sider>
  );
};

export default SiderComponent;
