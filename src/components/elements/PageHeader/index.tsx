import { Card, Flex, Space, Typography } from "antd";
import React from "react";

const { Title } = Typography;

type Props = {
  title?: any;
  extra?: any;
};

const PageHeader = ({ title, extra }: Props) => {
  return (
    <Card size="small">
      <Flex justify="space-between">
        {title && <Title level={4}>{title}</Title>}
        {extra && <Space>{extra}</Space>}
      </Flex>
    </Card>
  );
};

export default PageHeader;
