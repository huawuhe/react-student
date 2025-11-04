import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    
    &:hover {
      color: #1890ff;
    }
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    
    &:focus {
      outline: none;
    }
  }
  
  input, textarea {
    font-family: inherit;
    
    &:focus {
      outline: none;
    }
  }
  
  #root {
    width: 100vw;
    height: 100vh;
  }
`;
