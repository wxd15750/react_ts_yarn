import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
const { Header } = Layout;

export default function Tabbar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Header style={{ padding: 0 }}>
        {/* <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        /> */}
        <div style={{ paddingLeft: "20px" }}>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
          )}
        </div>
      </Header>
    </>
  );
}
