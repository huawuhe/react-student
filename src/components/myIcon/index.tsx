import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

// 创建图标组件
const MyIcon = createFromIconfontCN({
  // 替换为你在 iconfont.cn 上创建的项目 URL
  scriptUrl: '//at.alicdn.com/t/c/font_5057878_25uluymb54z.js',
});
interface IconProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomIcon: React.FC<IconProps> = ({ type, className, style, onClick }) => {
  return <MyIcon type={type} className={className} style={style} onClick={onClick} />;
};

export default CustomIcon;
