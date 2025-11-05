import styles from './login.module.less';
import MyIcon from '@/components/myIcon';
import React, { useState } from 'react';

interface Props {
  onSwitchMode: (flag: boolean) => void;
}
const LoginView: React.FC<Props> = ({ onSwitchMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  return (
    <div className={styles['login-content-wrapper']}>
      <div className={styles['login-content']}>
        <div className={styles['login-content-title']}>宿舍登录平台</div>
        <div className={styles['login-content-form']}>
          <div className={styles['login-content-form-item']}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="学工号"
            />
            <MyIcon
              type="icon-user"
              style={{
                fontSize: '32px',
              }}
            />
          </div>
          <div className={styles['login-content-form-item']}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="密码"
            />
            <MyIcon
              type="icon-password"
              style={{
                fontSize: '32px',
              }}
            />
          </div>
          <label className={styles['remember']}>
            <input
              type="checkbox"
              className={styles.checkboxInput}
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>记住密码</span>
          </label>
          <div className={styles['login-btn']}>登录</div>
          <div className={styles['login-other']}>
            <span>忘记密码</span>
            <span
              onClick={() => {
                onSwitchMode(true);
              }}
            >
              注册
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
