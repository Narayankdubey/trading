import {
  Button,
  Card,
  Col,
  List,
  Radio,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import React, { FC, useEffect, useMemo, useState } from "react";
import TradingFilter from "./component/TradingFilter";
import StrategyModal from "./component/StrategyModal";

const { Paragraph } = Typography;


let dummyListData = [
  {
    strategyId: 1,
    title: "first",
    backtest: "backtest",
    buy1: 12,
    sell: 10,
    buy2: 13,
    sbin: "SBIN",
    tata: "TATA",
    status: "pending",
    time: new Date(),
  },
  {
    strategyId: 2,
    title: "second",
    backtest: "backtest",
    buy1: 12,
    sell: 10,
    buy2: 13,
    sbin: "SBIN",
    tata: "TATA",
    status: "pending",
    time: new Date(),
  },
  {
    strategyId: 3,
    title: "Third",
    backtest: "backtest",
    buy1: 12,
    sell: 10,
    buy2: 13,
    sbin: "SBIN",
    tata: "TATA",
    status: "pending",
    time: new Date(),
  },
];

interface TradingProps {}

const TradingContainer: FC<TradingProps> = ({}) => {
  const [status, setStatus] = useState("orders");
  const [filteredData, setFilteredData] = useState<dataType[]>([]);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [strategyId, setStrategyId] = useState("")

  const tradingTabs = [
    { title: "ORDERS", value: "orders" },
    { title: "POSITIONS", value: "positions" },
    { title: "HOLDINGS", value: "holdings" },
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
    let data = [];
    let n = 0;
    for (let i = 0; i < 100; i++) {
      let obj: dataType = {
        key: i,
        symbol: `${n}-symbol`,
        order: n * 2,
        netQty: n,
        averagePrice: n * 5,
        ltp: n * 3,
        daypl: n * 4,
        overallpl: n * 3,
        status: n % 2 === 0 ? "orders" : n % 3 === 0 ? "positions" : "holdings",
      };
      data.push(obj);
      if (n < 7) n++;
      else n = 1;
    }
    return data;
  }, []);

  const getOptions = (key: string, data: any) => {
    let result: any = [];
    data.map((item: any) => result.push(item[key]));
    return [...new Set(result)];
  };

  const filterElement = useMemo(() => {
    const data = filteredData;
    let head: any = [];
    let result = [];
    if (data.length) {
      head = Object.keys(data[0]);
    }
    for (let item of head) {
      if (item != "key" && item != "status") {
        let abc = {
          name: item,
          options: getOptions(item, data),
        };
        result.push(abc);
      }
    }
    return result;
  }, [filteredData]);


  const listItem = (data: any) => (
    <Row style={{width:"100%"}}>
      <Col span={6}>
        <Paragraph>{data?.strategyId}</Paragraph>
        <Paragraph>{data?.title}</Paragraph>
        <Paragraph>{data?.backtest}</Paragraph>
      </Col>
      <Col span={4}>
        <Paragraph>{data?.buy1}</Paragraph>
        <Paragraph>{data?.sell}</Paragraph>
        <Paragraph>{data?.buy2}</Paragraph>
      </Col>
      <Col span={4}>
        <Paragraph>{data?.sbin}</Paragraph>
        <Paragraph>{data?.tata}</Paragraph>
      </Col>
      <Col span={6}>
        <Paragraph>{data?.status}</Paragraph>
        <Paragraph>{data?.time?.toString()}</Paragraph>
      </Col>
      <Col span={4}>
        <Button block >Run</Button>
        <Button block onClick={()=>{setIsStrategyModalOpen(true),setStrategyId(data?.strategyId)}}>Edit</Button>
        <Button block >Delete</Button>
      </Col>
    </Row>
  );

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
              <Button onClick={() => setIsStrategyModalOpen(true)}>Add</Button>
            </Space>
          </Col>
          <Col span={24}>
            {/* <Table dataSource={filteredData} columns={columns} /> */}
            <List
              size="small"
              dataSource={dummyListData}
              renderItem={(item) => <List.Item>{listItem(item)}</List.Item>}
            />
          </Col>
        </Row>
      </Col>
      {isStrategyModalOpen && (
        <StrategyModal
          isStrategyModalOpen={isStrategyModalOpen}
          setIsStrategyModalOpen={setIsStrategyModalOpen}
          strategyId={strategyId}
          setStrategyId = {setStrategyId}
        />
      )}
    </Row>
  );
};

export default TradingContainer;
