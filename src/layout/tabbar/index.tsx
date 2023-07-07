import React, { useState } from 'react'

import { Button, Layout } from 'antd';
import {
  MenuFoldOutlined, MenuUnfoldOutlined,

} from '@ant-design/icons';

const { Header} = Layout;

export default function Tabbar() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Header
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
  )
}
