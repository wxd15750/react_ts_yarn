import React, { useState } from 'react'

import {  Layout, Dropdown, Space  } from 'antd';
import {
  MenuFoldOutlined, MenuUnfoldOutlined,
  DownOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import './tabbar.scss'
import { Link} from 'react-router-dom';


const { Header} = Layout;



export default function Tabbar() {

  const [collapsed, setCollapsed] = useState(false);

 

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to="/login">
          退出登录
          
        </Link>
      ),
    }
  ];

  

  const changeIcon =() =>{
    setCollapsed(!collapsed)
  }

  return (
    <Header
      className="header"
        
        >
          {/* 左侧图标 */}
          {
            collapsed ? <MenuUnfoldOutlined className='icon' onClick={changeIcon} /> : <MenuFoldOutlined className='icon' onClick={changeIcon} />
          }
          

          {/* 右侧用户信息区 */}
          <div className="user">
            <span className="username">欢迎admin回来</span>
            <Dropdown menu={{ items }}>
              <a>
                <Space>
                  <img className="Img" src="data:image/jpeg;base64,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" alt="" />
                  {/* <DownOutlined /> */}
                </Space>
              </a>
              
            </Dropdown>
          
          </div>
          
    </Header>
  )
}
