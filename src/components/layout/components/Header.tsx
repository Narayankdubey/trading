import { Avatar, Card, Col, Menu, Row } from 'antd'
import React, { FC } from 'react'

interface HeaderContainerProps {
  
}

export const HeaderContainer: FC<HeaderContainerProps> = ({  }) => {

  const menuItem = ["Profile","Setting"]

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  // };
  return (
    <Card style={{padding:0}}>
    <Row>
      <Col span={23}></Col>
      <Col span={1}>
      <Avatar>P</Avatar>
      </Col>
    </Row>
    </Card>
    
    // <Card>
    //   {/* <Menu
    //   // onClick={onClick}
    //   style={{ width: 256 }}
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
    //   mode="inline"
    //   // items={menuItem}
    // >Open</Menu> */}
    // </Card>
  )
}