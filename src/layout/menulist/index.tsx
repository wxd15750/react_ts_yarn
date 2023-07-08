import React, { useEffect, useState } from 'react'

import {Layout, Menu, MenuProps } from 'antd';

// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';

import Logo from '../logo';
import { findSideBarRoutes } from '@/routes/route';
import { SRoutes } from '@/routes/type';
import { useNavigate } from 'react-router-dom';
import { join } from 'path';




type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: "group"): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

interface MenuInfo {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

const { Sider } = Layout;


export default function MenuList() {

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const navigate = useNavigate()
  const routes = findSideBarRoutes() as SRoutes;

  const items: MenuItem[] = routes?.map((route)=>{
    return getItem(
      route.meta?.title,
      route.path as string,
      route.meta?.icon,
      route.children
        ?.map((item) => {
          if (item.hidden) return null;
          return getItem(item.meta?.title, item.path as string, item.meta?.icon);
        })
        .filter(Boolean)
    )
  })
  
  const handleMenuClick = ({key}:MenuInfo) => {
    navigate(key)

  }


  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const handleOpenChange = (openKeys: string[]) => {
    setOpenKeys(openKeys);
  };
  
  return (
    <Sider style={{overflow:"auto"}} collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint="lg">
        <Logo></Logo>
        <Menu 
        
        theme="dark" 
        mode="inline" 
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={handleMenuClick}
        onOpenChange={handleOpenChange}
        items={items} />
    </Sider>
  )
}
