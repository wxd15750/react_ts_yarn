import React, { useState } from 'react'

// 导入login的样式
import './login.scss'
import { Button, Form, Input} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Login() {

  // 定义加载中的效果
  const [loading,setLoading] = useState<boolean>(false)


  const onFinish = (values: any) => {
    console.log('Success:', values);
    setLoading(true)
    console.log(loading);
    
  };

  return (
    <div className='loginContainer'>
    
      <div className='loginForm'>
        <h1 className='title'>React+ts后台管理系统</h1>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          >
            <Form.Item
              name="username"
              
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder='账号' prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password  placeholder='密码' prefix={<LockOutlined/>}/>
            </Form.Item>
            <Form.Item >
              <Button type="primary" loading={loading} htmlType="submit" className='btn'>
                登录
              </Button>
            </Form.Item>
          </Form>
       

      </div>
          
    </div>
  )
}
