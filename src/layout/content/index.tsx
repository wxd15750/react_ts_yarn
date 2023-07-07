import React from 'react'

import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

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
          Content
        </Content>
  )
}
