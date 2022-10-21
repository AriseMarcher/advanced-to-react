import { Typography, Button, Card, Row, Col } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../models/product';

const { Title, Paragraph } = Typography;

interface Props {
  product: Product
}

const ProductItem: React.FC<Props> = ({product}) => {
  return (
    <Card
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      actions={[
        <Button type="link">
          <Link to="">查看详情</Link>
        </Button>,
        <Button type="link">
          <Link to="">加入购物车</Link>
        </Button>
      ]}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
      <Row>
        <Col span="12">销量：{product.sold}</Col>
        <Col span="12" style={{textAlign: 'right'}}>价格：{product.price}</Col>
      </Row>
      <Row>
        <Col span="12">上架时间：{product.createdAt}</Col>
        <Col span="12" style={{textAlign: 'right'}}>
          所属分类：{product.category.name}
        </Col>
      </Row>
    </Card>
  )
}

export default ProductItem