import React, { useState } from 'react'

import {Layout, Menu } from 'antd';

import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Logo from '../logo';

const { Sider } = Layout;

export default function MenuList() {

  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo></Logo>
        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
  )
}
