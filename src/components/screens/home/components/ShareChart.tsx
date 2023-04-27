import { Card, Typography } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { Stock } from '@ant-design/plots';
import { StockConfig } from '@ant-design/charts';


interface ShareChartProps { }

interface StockData {
  trade_date: string;
  open: number;
  close: number;
  high: number;
  low: number;
}

const ShareChart: FC<ShareChartProps> = ({ }) => {

  const [data, setData] = useState<StockData[]>([{trade_date:"12/12/2012",open:0,close:0,high:0,low:0}]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config: StockConfig  = {
    data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
  };

  return (
    <Card style={{height:"100%"}}>
      <Stock {...config} />
    </Card>
  )
}

export default ShareChart;