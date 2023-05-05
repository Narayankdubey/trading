import { Avatar, Button, Card, Progress, Row, Space, Typography } from "antd";
import React, { FC } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "@/common/constants";

const dummyData = [
  { name: "HDFC", icon: "H", percentange: 20, quantity: 2700 },
  { name: "ICICI", icon: "I", percentange: 10, quantity: 20 },
  { name: "NMDC", icon: "N", percentange: 50, quantity: 500 },
  { name: "TCS", icon: "T", percentange: 20, quantity: 70 },
  //   { name: "INFOSYS", icon: "I", percentange: 50, quantity: 90 },
  //   { name: "HDFC LIFE", icon: "H", percentange: 10, quantity: 100 },
];

interface SharesProps {
  name: string;
  icon: string;
  percentage: number;
  quantity: number;
  setDisplayChart: any;
}

const Shares: FC<SharesProps> = ({
  name,
  icon,
  percentage,
  quantity,
  setDisplayChart,
}) => {
  return (
    <div onClick={() => setDisplayChart(name)} style={{ cursor: "pointer" }}>
      <Row justify={"space-between"}>
        <Space>
          <Avatar>{icon}</Avatar>
          <Typography.Text>{name}</Typography.Text>
        </Space>
        <Space>
          <Typography.Text>{quantity}</Typography.Text>
        </Space>
      </Row>
      <Progress
        percent={percentage}
        status="active"
        strokeColor={{ from: "#108ee9", to: "#87d068" }}
      />
    </div>
  );
};

interface ShareListProps {
  setDisplayChart: any;
}

export const ShareList: FC<ShareListProps> = ({ setDisplayChart }) => {
  const router = useRouter();

  const viewMoreClick = () => {
    router.push(ROUTES.TRADING);
  };
  return (
    <Card title="Watchlist" size="small">
      {dummyData.map((item) => (
        <Shares
          key={item?.name}
          name={item?.name}
          percentage={item?.percentange}
          icon={item?.icon}
          quantity={item?.quantity}
          setDisplayChart={setDisplayChart}
        />
      ))}
      <Button block onClick={viewMoreClick}>
        View More
      </Button>
    </Card>
  );
};

export default ShareList;
