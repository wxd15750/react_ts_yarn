import React, { useState } from 'react'

import {Layout, Menu } from 'antd';

import {

  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Logo from '../logo';

// 获取路由

const { Sider } = Layout;



export default function MenuList() {

  const [collapsed, setCollapsed] = useState(false);

  const toPath = (e:any) => {
    console.log(e);

  }
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo></Logo>
        
        <Menu
          theme="dark"
          mode="inline"
          onClick={toPath}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/home',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '/login',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '/404',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
  )
}
