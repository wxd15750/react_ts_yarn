import React from "react";
// 引入样式文件
import "./layout.scss";

export default function Layouts() {
  return (
    <>
      <div className="layoutContainer">
        {/* 左边菜单栏 */}
        <div className="leftMenu">菜单栏</div>
        {/* 右侧区域 */}
        <div className="right">
          <div className="tabbar">头部导航区</div>
          <div className="contents">内容展示区</div>
        </div>
      </div>
    </>
  );
}
