import React, { FC } from "react";
import styles from "./Logo.module.css";
import { Card } from "antd";

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo: FC<LogoProps> = ({ size = 1, color }) => {
  const constainerStyle = {
    gap: size * 8 * 0.5,
    width: 2 * size * 8 + 8,
    height: 2 * size * 8 + 4,
    maxWidth: 2 * size * 8 + 8,
    maxHeight: 2 * size * 8 + 4,
  };
  return (
    // <div className={styles.container} style={constainerStyle}>
    //   {[1, 2, 3].map((item) => (
    //     <Card
    //       key={item}
    //       style={{
    //         width: size * 8,
    //         height: size * 8,
    //         backgroundColor: color ?? "white",
    //       }}
    //     ></Card>
    //   ))}
    //   {/* <Card
    //     style={{ width: size * 8, height: size * 8, backgroundColor: "white" }}
    //   ></Card>
    //   <Card
    //     style={{ width: size * 8, height: size * 8, backgroundColor: "white" }}
    //   ></Card> */}
    // </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={constainerStyle.width}
      height={constainerStyle.height}
      viewBox="0 0 114 106"
      fill="none"
    >
      <path
        d="M0 4.14075C0 2.03203 1.70946 0.322571 3.81818 0.322571H47.8919C50.0006 0.322571 51.7101 2.03203 51.7101 4.14075V48.3578H3.81819C1.70946 48.3578 0 46.6483 0 44.5396V4.14075Z"
        fill="white"
      />
      <path
        d="M113.762 4.14075C113.762 2.03203 112.053 0.322571 109.944 0.322571H65.8703C63.7616 0.322571 62.0521 2.03203 62.0521 4.14075V48.3578H109.944C112.053 48.3578 113.762 46.6483 113.762 44.5396V4.14075Z"
        fill="white"
      />
      <path
        d="M0 102.182C0 104.291 1.70946 106 3.81818 106H47.8919C50.0006 106 51.7101 104.291 51.7101 102.182V57.9648H3.81819C1.70946 57.9648 0 59.6743 0 61.783V102.182Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
