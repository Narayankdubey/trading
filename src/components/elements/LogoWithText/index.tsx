import React, { FC } from "react";
import Logo from "../Logo";
import Styles from "./LogoWithText.module.css";

interface LogoWithTextProps {
  size?: number;
  color?:string;
}

const LogoWithText: FC<LogoWithTextProps> = ({ size = 1,color }) => {
  return (
    <div className={Styles.container}>
      <Logo size={size} color={color}/>
      <h2 style={{ fontSize: size * 8 * 2, color:color??"" }}>TRADINGX</h2>
    </div>
  );
};

export default LogoWithText;
