import React from 'react';
import { ConfigProvider} from 'antd';
// 国际化
import zhCN from 'antd/locale/zh_CN';

// 导入路由表
import router from './routes/route';

import {useRoutes,Link} from 'react-router-dom'
import Layouts from './layout';

function App() {

  // 使用路由
  const outlet = useRoutes(router)
  

  return (
    <div className="App">
      {/* <ConfigProvider theme={{ token: { colorPrimary: '#71c3f3' } }} locale={zhCN}>
        {outlet}
      </ConfigProvider> */}
      <Layouts></Layouts>
        
      
    </div>
  );
}

export default App;
