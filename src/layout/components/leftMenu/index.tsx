import React, { useEffect, useState } from "react";

import { Layout, Menu } from "antd";

import type { MenuProps } from "antd";
import { findSideBarRoutes } from "@/routes/route";
import { SRoute } from "@/routes/type";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

interface MenuInfo {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

const { Sider } = Layout;
export default function LeftMenu() {
  const [collapsed, setCollapsed] = useState(false); //true
  // const [collapsed, setCollapsed] = useState(true); //true

  // 路由菜单
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const routesList = findSideBarRoutes() as SRoute[];
  useEffect(() => {}, []);
  // 整理路由相关

  const items: MenuItem[] = routesList.map((item) => {
    return getItem(
      item.meta?.title,
      item.path,
      item.meta?.icon,
      item.children?.map((items) => {
        return getItem(
          items.meta?.title,
          items.path as string,
          items.meta?.icon
        );
      })
    );
  });

  // 编程式导航
  const navigate = useNavigate();
  // const [pathname, setPathname] = useState<string>();
  // 路由菜单的点击
  const selectPath = (e: { key: string }) => {
    navigate(e.key);
  };

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
          onClick={selectPath}
          items={items}
        />
      </Sider>
    </>
  );
}
