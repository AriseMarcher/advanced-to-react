import { Button, Form, Input, Result } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetSignup, signup, SignupPayload } from '../../store/actions/auth.action'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import Layout from './Layout'

// 注册页面
const Signup = () => {
  // 获取dispatch
  const dispatch = useDispatch()
  // 获取注册结果
  const auth = useSelector<AppState, AuthState>(state => state.auth)

  const [form] = Form.useForm()

  // 注册表单提交
  const onFinish = (value: SignupPayload) => {
    dispatch(signup(value))
  }

  // 1. 注册成功 清空表单
  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields()
    }
  }, [auth])
  // 2. 注册成功 显示成功的提示信息
  const showSuccess = () => {
    console.log('111')
    console.log(auth)
    if (auth.signup.loaded && auth.signup.success) {
      return <Result
        status="success"
        title="注册成功"
        subTitle={auth.signup.message}
        extra={[
          <Button type="primary" key="console">
            <Link to="/signin">首页</Link>
          </Button>
        ]}
        ></Result>
    }
  }
  // 3. 注册失败 显示失败的提示信息
  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return <Result
        status="warning"
        title="注册失败"
        subTitle={auth.signup.message}
        ></Result>
    }
  }
  // 4. 离开页面之前 重置状态
  useEffect(() => {
    return () => {
      dispatch(resetSignup())
    }
  }, [])

  const signupForm = () => (
    <Form form={form} onFinish={onFinish}>
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
  )

  return (
    <Layout title="注册" subTitle=''>
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  )
}

export default Signup