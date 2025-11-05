import styles from './login.module.less';
import LoginView from './Login';
import RegisterView from './Register';
import { useState } from 'react';
const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const onSwitchMode = (registerFlag: boolean) => {
    setIsRegister(registerFlag);
  };
  return (
    <div className={styles['login-wrapper']}>
      <div className={styles['logo']}></div>
      {isRegister ? (
        <RegisterView onSwitchMode={onSwitchMode} />
      ) : (
        <LoginView onSwitchMode={onSwitchMode} />
      )}
    </div>
  );
};

export default Login;
