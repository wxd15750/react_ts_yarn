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
import Contents from "./components/contents";
import LeftMenu from "./components/leftMenu";
import Tabbar from "./components/tabbar";
const { Header, Sider, Content } = Layout;

export default function Layouts() {
  return (
    <>
      <div className="layoutContainer">
        {/* 左边菜单栏 */}
        <div className="leftMenu">
          <LeftMenu></LeftMenu>
        </div>
        {/* 右侧区域 */}
        <div className="right">
          <div className="tabbar">
            <Tabbar></Tabbar>
          </div>
          <div className="contents">
            <Contents></Contents>
          </div>
        </div>
      </div>
    </>
  );
}
