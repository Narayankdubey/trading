import { Col, Row, Space } from "antd";
import React, { FC, useState } from "react";
import {
  Dof,
  LeftOptions,
  RightOptions,
  ShareChart,
  ShareList
} from "./components";

interface GraphContainerProps {}

const GraphContainer: FC<GraphContainerProps> = ({}) => {
  const [displayChart, setDisplayChart] = useState<any>([]);

  const onAddChartDisplay = (item: string) => {
    if (displayChart.includes(item)) {
      setDisplayChart((old: any) => old.filter((elem: string) => elem != item));
    } else if (displayChart.length < 4)
      setDisplayChart([...displayChart, item]);
  };

  return (
    <Row gutter={[8, 8]} style={{ padding: 10 }}>
      <Col xs={4} md={2} lg={1}>
        <LeftOptions />
      </Col>
      <Col xs={20} md={22} lg={17}>
        <ShareChart displayChart={displayChart} />
      </Col>
      <Col xs={24} md={24} lg={6}>
        <Row gutter={8}>
          <Col span={20}>
            <ShareList setDisplayChart={onAddChartDisplay} />
          </Col>
          <Col span={4}>
            <RightOptions />
          </Col>
        </Row>
        <Dof />
      </Col>
    </Row>
  );
};

export default GraphContainer;
