import styles from './login.module.less';
import MyIcon from '@/components/myIcon';
import { message } from 'antd';
import { useState } from 'react';
interface Props {
  onSwitchMode: (flag: boolean) => void;
}
const RegisterView: React.FC<Props> = ({ onSwitchMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const register = () => {
    if (password !== repeatPassword) {
      messageApi.open({
        type: 'error',
        content: '2次密码不一致',
      });
      return;
    }
  };
  return (
    <div className={styles['register-content-wrapper']}>
      {contextHolder}
      <div className={styles['register-content']}>
        <div className={styles['register-content-title']}>用户注册</div>
        <div className={styles['register-content-form']}>
          <div className={styles['register-content-form-item']}>
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
          <div className={styles['register-content-form-item']}>
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
          <div className={styles['register-content-form-item']}>
            <input
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="再次输入密码"
            />
            <MyIcon
              type="icon-password"
              style={{
                fontSize: '32px',
              }}
            />
          </div>
          <div className={styles['register-btn']} onClick={register}>
            注册
          </div>
          <div className={styles['register-other']}>
            <span
              onClick={() => {
                onSwitchMode(false);
              }}
            >
              已有账号？去登录
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
