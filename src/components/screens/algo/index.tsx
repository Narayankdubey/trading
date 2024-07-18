import { Card, Col, Row, Select, Space, Typography } from "antd";
import React, { FC } from "react";
import { Input } from "antd";

const { TextArea } = Input;

interface AlgoContainerProps {}

const selectItems = [
  {
    defaultValue: "lucy",
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "Yiminghe", label: "yiminghe" },
      { value: "disabled", label: "Disabled", disabled: true }
    ]
  },
  {
    defaultValue: "lucy",
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "Yiminghe", label: "yiminghe" },
      { value: "disabled", label: "Disabled", disabled: true }
    ]
  },
  {
    defaultValue: "lucy",
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "Yiminghe", label: "yiminghe" },
      { value: "disabled", label: "Disabled", disabled: true }
    ]
  },
  {
    defaultValue: "lucy",
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "Yiminghe", label: "yiminghe" },
      { value: "disabled", label: "Disabled", disabled: true }
    ]
  },
  {
    defaultValue: "lucy",
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "Yiminghe", label: "yiminghe" },
      { value: "disabled", label: "Disabled", disabled: true }
    ]
  }
];

const AlgoContainer: FC<AlgoContainerProps> = ({}) => {
  return (
    <Row gutter={[8, 8]}>
      <Col xs={24} sm={8} md={6} lg={4}>
        <Card size="small">
          <Typography.Title level={3}>Algo Tab</Typography.Title>
        </Card>
      </Col>
      <Col span={24}>
        <Space wrap>
          {selectItems.map((item, index) => (
            <Select
              key={index}
              defaultValue={item?.defaultValue}
              style={{ width: 120 }}
              // onChange={handleChange}
              options={item?.options}
            />
          ))}
        </Space>
      </Col>
      <Col span={24}>
        <TextArea rows={19} autoFocus />
      </Col>
    </Row>
  );
};

export default AlgoContainer;
