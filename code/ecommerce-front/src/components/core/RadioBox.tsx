import React from 'react'
import { List, Radio, Typography } from 'antd'

const { Title } = Typography
const prices = [
  {price: "0 - 50"},
  {price: "51 - 100"},
]

const RadioBox = () => {
  return <>
    <Title level={4}>按照价格筛选</Title>
    <Radio.Group>
      <List dataSource={prices} renderItem={item => (
        <List.Item key={item.price}>
          <Radio>{item.price}</Radio>
        </List.Item>
      )} />
    </Radio.Group>
  </>
}

export default RadioBox