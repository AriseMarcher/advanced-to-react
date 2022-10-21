import React from 'react'
import { List, Typography, Checkbox as AntdCheckbox } from 'antd'

const { Title } = Typography;

const categories = [
  {name: 'Node'},
  {name: 'Angular'}
]

const Checkbox = () => {
  return <>
    <Title level={4}>按照分类筛选</Title>
    <List dataSource={categories} renderItem={
      item => (
        <List.Item>
          <AntdCheckbox>{item.name}</AntdCheckbox>
        </List.Item>
      )
    }></List>
  </>
}

export default Checkbox