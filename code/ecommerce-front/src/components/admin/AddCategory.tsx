import { Button, Form, Input, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../models/auth'
import Layout from '../core/Layout'

const AddCategory = () => {
  const [name, setName] = useState<String>("")
  const { user, token } = isAuth() as Jwt

  useEffect(() => {
    async function addCategory () {
      try {
        let response = await axios.post<{name: string}>(`${API}/category/create/${user._id}`, {
          name: name
        }, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        message.success(`[${response.data.name}]分类添加成功`)
      } catch (error: any) {
        message.error(error.response.data.error)
      }
    }
    if (name.trim()) {
      addCategory()
    }
  }, [name])

  const onFinish = (value: { name: string }) => {
    console.log(value)
    setName(value.name)
  }

  return (
    <Layout title='添加分类' subTitle=''>
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="分类名称">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>添加分类</Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to="/admin/dashboard">返回 Dashboard</Link>
      </Button>
    </Layout>
  )
}

export default AddCategory