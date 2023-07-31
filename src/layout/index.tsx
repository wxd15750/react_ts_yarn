import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
// 引入样式文件
import "./layout.scss";
const { Header, Sider, Content } = Layout;

export default function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="layoutContainer">
        {/* 左边菜单栏 */}
        <div className="leftMenu">
          <Sider trigger={null} collapsible collapsed={collapsed} width="240px">
            <div className="demo-logo-vertical"></div>
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
        </div>
        {/* 右侧区域 */}
        <div className="right">
          <div className="tabbar">
            <Header style={{ padding: 0 }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
          </div>
          <div className="contents">
            <Content
              style={{
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </div>
        </div>
      </div>
    </>
  );
}
