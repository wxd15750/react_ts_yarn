import React, { useState } from 'react'

// 导入login的样式
import './login.scss'
import { Button, Form, Input, notification} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { reqLogin } from '@/api/userApi';
import {  useNavigate } from 'react-router-dom';
import { SET_TOKEN } from '@/utils/token';
import { getTime } from '@/utils/timer';

export default function Login() {

  // 定义加载中的效果
  const [loading,setLoading] = useState<boolean>(false)

  // 使用编程是导航
  const navigate = useNavigate();

  const onFinish = async  (values: any) => {
    setLoading(true)
    const res = await reqLogin(values)
    if(res.code === 20000){
      const {token} = res.data
      SET_TOKEN(token)
      
      navigate("/")
      notification.success({
        description: `HI,${getTime()}好 `,
        message: '登录成功',
        duration:3,
        type: 'success',
      })
      setLoading(false)
    }
   
  };

  return (
    <div className='loginContainer'>
    
      <div className='loginForm'>
        <h1 className='title'>React+ts后台管理系统</h1>
        <Form
          name="basic"
          initialValues={{username:"admin",password:"111111"}}
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
