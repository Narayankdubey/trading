import { Card, Col, Row, Typography } from "antd";
import React, { FC, useEffect, useState } from "react";
import Chart from "react-google-charts";
const data = [
  ["day", "a", "b", "c", "d"],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

interface ShareChartProps {
  displayChart: any;
}

const ShareChart: FC<ShareChartProps> = ({ displayChart }) => {
  const dataLength = displayChart?.length;

  return (
    <>
      {dataLength > 0 ? (
        <Row
          gutter={[8, 8]}
          style={{ height: dataLength <= 1 ? "100%" : "50%" }}
        >
          {displayChart.map((item: string) => (
            <Col
              key={item}
              span={dataLength > 2 ? 12 : 24}
              style={{ height: "100%", transition: "ease-in 0.3s" }}
            >
              <Card style={{ height: "100%" }}>
                <Chart
                  width={"100%"}
                  height={"100%"}
                  chartType="CandlestickChart"
                  loader={<div>Loading Chart...</div>}
                  data={data}
                  options={{
                    legend: "none",
                    backgroundColor: "#141414",
                    color: "white",
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Card style={{ height: "100%" }}>
          Please select any Stock from Watchlist to see chart
        </Card>
      )}
    </>
  );
};

export default ShareChart;
