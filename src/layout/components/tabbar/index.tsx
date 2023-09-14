import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { showall, store } from "@/redux/store";
const { Header } = Layout;

export default function Tabbar() {
  const [collapsed, setCollapsed] = useState(true);
  const isToggle = () => {
    store.dispatch(showall(collapsed));
    setCollapsed(store.getState().isShow);
    console.log(store.getState().isShow);
  };

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
          {store.getState().isShow ? (
            <MenuUnfoldOutlined onClick={isToggle} />
          ) : (
            <MenuFoldOutlined onClick={isToggle} />
          )}
        </div>
      </Header>
    </>
  );
}
