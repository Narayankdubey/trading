import { Card } from 'antd'
import React, {useState,useEffect, FC } from 'react'
import { Stock } from '@ant-design/plots';

interface ShareChartProps {
  
}

export const ShareChart: FC<ShareChartProps> = ({  }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setLoading(true)
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
      setLoading(false)
  };
  const config = {
    data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
  };
  return (
    <Card loading={loading}>
        {/* @ts-ignore */}
     <Stock {...config} />
    </Card>
  )
}