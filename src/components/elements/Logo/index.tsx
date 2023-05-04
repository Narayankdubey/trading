import React, { FC } from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  size?: number;
}

const Logo: FC<LogoProps> = ({ size = 1 }) => {
  const constainerStyle = {
    gap: size * 8 * 0.5,
    width: 2 * size * 8 + 8,
    height: 2 * size * 8 + 4,
    maxWidth: 2 * size * 8 + 8,
    maxHeight: 2 * size * 8 + 4,
  };
  return (
    <div className={styles.container} style={constainerStyle}>
      <div
        style={{ width: size * 8, height: size * 8, backgroundColor: "white" }}
      ></div>
      <div
        style={{ width: size * 8, height: size * 8, backgroundColor: "white" }}
      ></div>
      <div
        style={{ width: size * 8, height: size * 8, backgroundColor: "white" }}
      ></div>
    </div>
  );
};

export default Logo;
