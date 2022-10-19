import { Button, Form, Input } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signup, SignupPayload } from '../../store/actions/auth.action'
import Layout from './Layout'

// 注册页面
const Signup = () => {
  // 获取dispatch
  const dispatch = useDispatch()

  const onFinish = (value: SignupPayload) => {
    console.log(value)
    dispatch(signup(value))
  }

  return (
    <Layout title="注册" subTitle=''>
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="submit">
          <Button type='primary' htmlType='submit'>注册</Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Signup