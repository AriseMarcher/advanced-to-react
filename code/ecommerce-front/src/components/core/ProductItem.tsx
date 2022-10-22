import { Typography, Button, Card, Row, Col, Image } from 'antd'
import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../config';
import { Product } from '../../models/product';

const { Title, Paragraph } = Typography;

interface Props {
  product: Product,
  showViewProduct?: boolean,
  showCartBtn?: boolean
}

const ProductItem: React.FC<Props> = ({
  product,
  showViewProduct = true,
  showCartBtn = true
}) => {
  const showButtons = () => {
    let buttonArray = []
    showViewProduct && buttonArray.push(
      <Button type="link">
        <Link to={`/product/${product._id}`}>查看详情</Link>
      </Button>
    )
    showCartBtn && buttonArray.push(
      <Button type="link">
        <Link to="">加入购物车</Link>
      </Button>
    ) 
    return buttonArray
  }

  return (
    <Card
      cover={
        <Image className='product-img' src={`${API}/product/photo/${product._id}`} alt={product.name} />
      }
      actions={showButtons()}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
      <Row>
        <Col span="12">销量：{product.sold}</Col>
        <Col span="12" style={{textAlign: 'right'}}>价格：{product.price}</Col>
      </Row>
      <Row>
        <Col span="12">上架时间：{moment(product.createdAt).format("YYYY-MM-DD")}</Col>
        <Col span="12" style={{textAlign: 'right'}}>
          所属分类：{product.category.name}
        </Col>
      </Row>
    </Card>
  )
}

export default ProductItem