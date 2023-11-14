import { LogoWithText } from "@/components/elements";
import { Col, Row, Space, Typography } from "antd";
import React, { FC } from "react";
import style from "./HomeContainer.module.css";

interface HomeContainerProps {}

const HomeContainer: FC<HomeContainerProps> = ({}) => {
  return (
    <div className={style.container}>
      <div>
        <Typography.Paragraph>Welcome back, Alferd</Typography.Paragraph>
        <LogoWithText size={2} color="white"/>
      </div>
    </div>
  );
};

export default HomeContainer;
