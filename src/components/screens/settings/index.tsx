import { Tabs } from "antd";
import React, { FC } from "react";
import { UserOutlined, HighlightOutlined } from "@ant-design/icons";
import UiSetting from "./components/UiSetting";

interface SettingsProps {}

const SettingsContainer: FC<SettingsProps> = ({}) => {
  const tabs = [
    {
      label: (
        <span>
          <UserOutlined />
          Account
        </span>
      ),
      children: <div>Account Setting</div>,
      key: "account",
    },
    {
      label: (
        <span>
          <HighlightOutlined /> UI
        </span>
      ),
      icon: "",
      children: <UiSetting />,
      key: "ui",
    },
  ];
  return <Tabs className="m-5" tabPosition={"left"} items={tabs} />;
};

export default SettingsContainer;
