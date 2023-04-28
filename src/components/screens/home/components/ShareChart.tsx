import { Card, Col, Row, Typography } from 'antd'
import React, { FC, useEffect, useState } from 'react'



interface ShareChartProps {
  displayChart: any
}


const ShareChart: FC<ShareChartProps> = ({ displayChart }) => {
  const dataLength = displayChart?.length


  return (
    <>
      {dataLength > 0 ? (<Row gutter={[8, 8]} style={{ height: dataLength <= 2 ? "100%" : "50%" }}>
        {displayChart.map((item: string) => (
          <Col key={item} span={dataLength > 1 ? 12 : 24} style={{ height: "100%" }}>
            <Card style={{ height: "100%" }}>
              <div>{item}</div>
            </Card>
          </Col>))}
      </Row>)
        : (
          <Card style={{ height: "100%" }}>
            Please select any Stock from Watchlist to see chart
          </Card>
        )
      }
    </>)
}

export default ShareChart;