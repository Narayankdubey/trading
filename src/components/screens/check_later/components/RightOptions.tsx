import { Avatar, Card, Dropdown, Menu, Space } from "antd";
import type { MenuProps } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import React, { FC } from "react";

interface RightOptionsProps {}

const RightOptions: FC<RightOptionsProps> = ({}) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: "Setting",
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      label: "Log Out",
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <Space direction="vertical">
      {/* <Card size='small'> */}
      {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /> */}
      <Dropdown menu={{ items }}>
        <Avatar shape="square" size={46} icon={<UserOutlined />} />
      </Dropdown>
      {/* </Card> */}
      <Card style={{ height: "288px" }}></Card>
    </Space>
  );
};

export default RightOptions;
