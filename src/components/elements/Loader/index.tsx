import { Spin } from "antd";
import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Spin></Spin>
    </div>
  );
};

export default Loader;
