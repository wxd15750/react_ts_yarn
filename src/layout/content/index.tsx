import React from 'react'

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;


export default function ShowContent() {
  
  return (
    <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "#fff",
          }}
        >
          <Outlet />
        </Content>
  )
}
