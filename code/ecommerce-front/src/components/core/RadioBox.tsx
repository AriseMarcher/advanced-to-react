import React from 'react'
import { List, Radio, Typography } from 'antd'
import prices from '../../helpers/price'
import { RadioChangeEvent } from 'antd/lib/radio'
const { Title } = Typography

interface Props {
  handleFilter: (arg: number[]) => void
}

const RadioBox: React.FC<Props> = ({handleFilter}) => {
  const onchange = (event: RadioChangeEvent) => {
    console.log(event)
    handleFilter(event.target.value)
  }

  return <>
    <Title level={4}>按照价格筛选</Title>
    <Radio.Group>
      <List dataSource={prices} renderItem={item => (
        <List.Item key={item.id}>
          <Radio onChange={onchange} value={item.array}>{item.name}</Radio>
        </List.Item>
      )} />
    </Radio.Group>
  </>
}

export default RadioBox