import React, { useState } from "react";

// 引入样式文件
import "./layout.scss";
import Contents from "./components/contents";
import LeftMenu from "./components/leftMenu";
import Tabbar from "./components/tabbar";
import Footers from "./components/footer";

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
          <div className="footer">
            <Footers></Footers>
          </div>
        </div>
      </div>
    </>
  );
}
