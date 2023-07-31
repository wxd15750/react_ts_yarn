import React from "react";
import { ConfigProvider } from "antd";
// 国际化
import zhCN from "antd/locale/zh_CN";

// 导入路由表

import { useRoutes } from "react-router-dom";

import routes from "./routes/route";

function App() {
  // 使用路由
  const outlet = useRoutes(routes);

  return (
    <div className="App">
      <ConfigProvider
        theme={{ token: { colorPrimary: "#71c3f3" } }}
        locale={zhCN}
      >
        {outlet}
      </ConfigProvider>
    </div>
  );
}

export default App;
