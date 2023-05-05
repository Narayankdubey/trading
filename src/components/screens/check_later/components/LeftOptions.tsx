import { Card, Space } from "antd";
import React, { FC } from "react";

interface LeftOptionsProps {}

const LeftOptions: FC<LeftOptionsProps> = ({}) => {
  return (
    <Space direction="vertical">
      <Card style={{ height: "265px" }}></Card>
      <Card style={{ height: "265px" }}></Card>
    </Space>
  );
};

export default LeftOptions;
