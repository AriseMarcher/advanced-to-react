import React from 'react'
import { Button, Form, Input, Result } from 'antd'
import Layout from './Layout'
import { signin, SigninPayload } from '../../store/actions/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../models/auth'
import { Redirect } from 'react-router-dom'

const Signin = () => {
  // 获取 dispatch
  const dispatch = useDispatch()
  const onFinish = (value: SigninPayload) => {
    dispatch(signin(value))
  }

  // 1. 获取登录结果
  const auth = useSelector<AppState, AuthState>(state => state.auth)
  // 2. 登录失败 显示错误信息
  const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return <Result
      status="warning"
      title="登录失败"
      subTitle={auth.signin.message}
      ></Result>
    }
  }
  // 3. 登录成功 根据角色跳转到对应的管理页面
  const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      const { user: {role} } = auth as Jwt
      if (role === 0) {
        // 注册用户
        return <Redirect to="/user/dashboard" />
      } else {
        // 管理员
        return <Redirect to="/admin/dashboard" />
      }
    }
  }
  const signinForm = () => (
    <Form onFinish={onFinish}>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Form.Item name="submit">
        <Button type='primary' htmlType='submit'>登陆</Button>
      </Form.Item>
    </Form>
  )
  // 4. 处理导航链接 已登录 隐藏 [登录，注册] 显示 [dashboard]
  // Navigator中实现
  
  return (
    <Layout title="登录" subTitle='请登录体验功能'>
      {showError()}
      {redirectToDashboard()}
      {signinForm()}
    </Layout>
  )
}

export default Signin