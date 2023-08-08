import { Card, Checkbox, Row, Space, Typography } from "antd";
import React, { FC } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

interface TradingFilterProps {
  data: any;
}

const TradingFilter: FC<TradingFilterProps> = ({ data }) => {

  const Header = ({ item }: any) => (
    <Typography.Text className={"fontWeight600"}>
      {item?.name?.toUpperCase()}
    </Typography.Text>
  );
  console.log(data?.map((elem: any) => elem?.name), 'data?.map((elem: any) => elem?.name)')
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        maxHeight: "calc(100vh - 74px)",
        overflow: "auto",
      }}
    >
      <Card size="small">Filter</Card>
      <Collapse
        bordered={false}
        defaultActiveKey={data?.map((elem: any) => elem?.name)}
        expandIconPosition={"end"}
      >
        {data &&
          data.map((item: any) => (
            <Panel header={<Header item={item} />} key={item?.name}>
              {item?.options &&
                item?.options?.map((option: any) => (
                  <Row key={option}>
                    <Checkbox value={option}>{option}</Checkbox>
                  </Row>
                ))}
            </Panel>
          ))}
      </Collapse>
    </Space>
  );
};

export default TradingFilter;
