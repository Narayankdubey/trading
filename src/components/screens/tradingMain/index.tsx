import { Card, Col, Radio, Row, Space, Table, Typography } from "antd";
import React, { FC, useEffect, useMemo, useState } from "react";
import TradingFilter from "./component/TradingFilter";

const columns = [
  {
    title: "SYMBOL",
    dataIndex: "symbol",
    key: "symbol"
  },
  {
    title: "ORDER",
    dataIndex: "order",
    key: "order"
  },
  {
    title: "Net Qty",
    dataIndex: "netQty",
    key: "netQty"
  },
  {
    title: "Average Price",
    dataIndex: "averagePrice",
    key: "averagePrice"
  },
  {
    title: "LTP",
    dataIndex: "ltp",
    key: "ltp"
  },
  {
    title: "Day P&L",
    dataIndex: "daypl",
    key: "daypl"
  },
  {
    title: "Overall P&L",
    dataIndex: "overallpl",
    key: "overallpl"
  }
];

interface TradingProps {}

const TradingContainer: FC<TradingProps> = ({}) => {
  const [status, setStatus] = useState("orders");
  const [filteredData, setFilteredData] = useState<dataType[]>([]);

  const tradingTabs = [
    { title: "ORDERS", value: "orders" },
    { title: "POSITIONS", value: "positions" },
    { title: "HOLDINGS", value: "holdings" }
  ];

  interface dataType {
    key: number;
    symbol: string;
    order: number;
    netQty: number;
    averagePrice: number;
    ltp: number;
    daypl: number;
    overallpl: number;
    status: string;
  }

  const createData = useMemo(() => {
    const data = [];
    let n = 0;
    for (let i = 0; i < 100; i++) {
      const obj: dataType = {
        key: i,
        symbol: `${n}-symbol`,
        order: n * 2,
        netQty: n,
        averagePrice: n * 5,
        ltp: n * 3,
        daypl: n * 4,
        overallpl: n * 3,
        status: n % 2 === 0 ? "orders" : n % 3 === 0 ? "positions" : "holdings"
      };
      data.push(obj);
      if (n < 7) n++;
      else n = 1;
    }
    
return data;
  }, []);

  const getOptions = (key: string, data: any) => {
    const result: any = [];
    data.map((item: any) => result.push(item[key]));
    
return [...new Set(result)];
  };

  const filterElement = useMemo(() => {
    const data = filteredData;
    let head: any = [];
    const result = [];
    if (data.length) {
      head = Object.keys(data[0]);
    }
    for (const item of head) {
      if (item != "key" && item != "status") {
        const abc = {
          name: item,
          options: getOptions(item, data)
        };
        result.push(abc);
      }
    }
    
return result;
  }, [filteredData]);

  useEffect(() => {
    setFilteredData(() => createData.filter((e) => e.status === status));
  }, [status, createData]);

  return (
    <Row gutter={8}>
      <Col span={4}>
        <TradingFilter data={filterElement} />
      </Col>
      <Col span={20}>
        <Row gutter={[8, 8]}>
          <Col xs={24} sm={8} md={6} lg={4}>
            <Card size="small">
              <Typography.Title level={4}>Trading Tab</Typography.Title>
            </Card>
          </Col>
          <Col span={24}>
            <Space wrap>
              <Radio.Group
                buttonStyle="solid"
                defaultValue={status}
                onChange={({ target }) => setStatus(target.value)}
              >
                {tradingTabs.map((item) => (
                  <Radio.Button key={item?.title} value={item?.value}>
                    {item?.title}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Space>
          </Col>
          <Col span={24}>
            <Table dataSource={filteredData} columns={columns} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TradingContainer;
