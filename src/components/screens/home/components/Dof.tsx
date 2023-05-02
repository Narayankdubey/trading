import { Card, Col, Row } from 'antd';
import React, { FC } from 'react'

interface DofProps {
  
}

const Dof: FC<DofProps> = ({  }) => {

  return (
    <Card style={{height:"190px", marginTop:"5px"}}>
      <Row gutter={8}>
        <Col></Col>
        <Col></Col>
      </Row>
    </Card>
  )
}

export default Dof;