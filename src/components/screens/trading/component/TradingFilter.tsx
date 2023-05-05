import { Card, Checkbox, Row, Space, Typography } from "antd";
import React, { FC } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

interface TradingFilterProps {}

const TradingFilter: FC<TradingFilterProps> = ({}) => {
  const filterDummyData = [
    {
      name: "first",
      options: ["1-option1", "1-option2", "1-option3"],
      disabled: false,
    },
    {
      name: "second",
      options: ["2-option1", "2-option2", "2-option3"],
      disabled: false,
    },
    {
      name: "third",
      options: ["3-option1", "3-option2", "3-option3"],
      disabled: false,
    },
    {
      name: "forth",
      options: ["4-option1", "4-option2", "4-option3"],
      disabled: true,
    },
  ];
  const Header = ({ item }: any) => (
    <Typography.Text className={"fontWeight600"}>
      {item?.name?.toUpperCase()}
    </Typography.Text>
  );
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
        defaultActiveKey={filterDummyData?.map((elem) => elem?.name)}
        expandIconPosition={"end"}
      >
        {filterDummyData.map((item) => (
          <Panel header={<Header item={item} />} key={item?.name}>
            {item?.options &&
              item?.options?.map((option) => (
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
