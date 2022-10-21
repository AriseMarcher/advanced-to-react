import { Button, Form, Input, message, Select, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import Layout from '../core/Layout'
import { UploadOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.action'
import { AppState } from '../../store/reducers'
import { CategoryState } from '../../store/reducers/category.reducer'
import { RcFile } from 'antd/lib/upload'
import axios from 'axios'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../models/auth'

const AddProduct = () => {
  const dispatch = useDispatch()
  const [file, setFile] = useState<RcFile>()
  const {user, token} = isAuth() as Jwt
  const category = useSelector<AppState, CategoryState>(state => state.category)
  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const onFinish = (product: any) => {
    const formData = new FormData()
    for (let attr in product) {
      formData.set(attr, product[attr])
    }
    if (typeof file !== 'undefined') {
      formData.set('photo', file)
    }

    axios.post(`${API}/product/create/${user._id}`, formData, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(() => {
      message.success('商品添加成功')
    }).catch(() => {
      message.error('商品添加失败')
    })
  }

  const addProductForm = () => {
    const props = {
      beforeUpload: function (file: RcFile) {
        console.log(file)
        setFile(file)
        return false
      },
      accept: "image/*"
    }
    return (
      <Form onFinish={onFinish} initialValues={{category: ""}}>
        <Form.Item>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item name="name" label="商品名称">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="商品描述">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="商品价格">
          <Input />
        </Form.Item>
        <Form.Item name="category" label="所属分类">
          <Select>
            <Select.Option value="">请选择分类</Select.Option>
            {
              category.category.result.map(item => (
                <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item name="quantity" label="商品数量">
          <Input />
        </Form.Item>
        <Form.Item name="shipping" label="是否需要运输">
          <Select>
            <Select.Option value="1">是</Select.Option>
            <Select.Option value="0">否</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>提交</Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <Layout title="添加商品" subTitle=''>
      {addProductForm()}
    </Layout>
  )
}

export default AddProduct