import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 清空默认样式
import '@/styles/reset.scss'

// 导入路由的实列方法
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
);

