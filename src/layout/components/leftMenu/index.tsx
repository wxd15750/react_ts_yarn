import React, { useState } from "react";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
// 引入样式文件
const { Sider } = Layout;
export default function LeftMenu() {
  // const [collapsed, setCollapsed] = useState(false); //true
  const [collapsed, setCollapsed] = useState(true); //true

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={`collapsed ? ${80} : ${240}`}
      >
        <div
          style={{ width: `collapsed ? ${80}+px : ${240}+px` }}
          className="demo-logo-vertical"
        ></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
    </>
  );
}
