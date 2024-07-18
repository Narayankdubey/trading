import React from "react";
import { Typography } from "antd";
import styles from "../index.module.css";

const { Title } = Typography;

export const ScreenLayout = (props: { title: string; component: any }) => {
  const { title, component } = props;

  return (
    <div className={styles.screen}>
      <Title level={2}>{title}</Title>
      <div style={{ height: 2, backgroundColor: "grey", marginBottom: 32 }} />
      {component}
    </div>
  );
};
