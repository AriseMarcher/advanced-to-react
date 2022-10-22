import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'

const Pay = () => {

  const showButton = () => {
    return isAuth()
      ? <Button>提交订单</Button>
      : <Button>
          <Link to="/signin">登录</Link>
        </Button>
  }
  return (
    <>{showButton()}</>
  )
}

export default Pay

