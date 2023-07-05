import React from 'react'

// 导入login的样式
import './login.scss'
import { Button, Col, Form, Input, Row } from 'antd'

export default function Login() {


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className='loginContainer'>
      <Row>
        <Col span={24}>
          <Form
            name="basic"
            labelCol={{ span: 6}}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            

            <Form.Item wrapperCol={{  span: 18 }}>
              <Button type="primary" htmlType="submit" style={{width:"100%"}}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
