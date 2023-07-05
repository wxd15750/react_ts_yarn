import React from 'react';
// import Login from '@/pages/home/index';
// import NotFound from './pages/404';
// import Home from '@/pages/home/index';

// 导入路由表
import router from './routes/route';

import {useRoutes,Link} from 'react-router-dom'

function App() {

  // 使用路由
  const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* <Link to='/home'>home</Link>
      <Link to='/login'>login</Link>
      <Link to='/*'>404</Link> */}
        {outlet}
      {/* 我是App
      <Login></Login>
      <Home></Home>
      <NotFound></NotFound> */}
    </div>
  );
}

export default App;
