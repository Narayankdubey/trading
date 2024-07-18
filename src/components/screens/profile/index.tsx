import { profileConstant } from "@/common/constants";
import { Card, Col, Flex, Image, List, Row, Space, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

type Props = {};

const ProfileContainer = (props: Props) => {
  return (
    <Row style={{ padding: 10 }}>
      <Col span={8}>
        <Card size="small" style={{ width: "90%", margin: "auto" }}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Image
                width={"100%"}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                alt="img"
                style={{ overflow: "hidden", borderRadius: "45%" }}
              />
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <Title level={3}>John Someone</Title>
              <Paragraph>About something here</Paragraph>
            </Col>
            <Col span={24}>
              <List
                size="small"
                dataSource={profileConstant.basicDetails}
                renderItem={(item) => (
                  <Row style={{ width: "100%" }}>
                    <Col span={8}>
                      <Title level={5}>{item?.label} :</Title>
                    </Col>
                    <Col span={16}> {item?.value}</Col>
                  </Row>
                )}
              />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={16}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Card title="card 1" style={{ height: "50vh" }}>
            1
          </Card>
          <Card title="card 2" style={{ height: "30vh" }}>
            2
          </Card>
        </Space>
      </Col>
    </Row>
  );
};

export default ProfileContainer;
