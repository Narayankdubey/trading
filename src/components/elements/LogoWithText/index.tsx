import React, { FC } from 'react'
import Logo from '../Logo';
import Styles from "./LogoWithText.module.css"

interface LogoWithTextProps {
    size?: number;
}

const LogoWithText: FC<LogoWithTextProps> = ({ size = 1 }) => {
    return (
        <div className={Styles.container}>
            <Logo size={size} />
            <h2 style={{ fontSize: size * 8 *2 }}>TRADINGX</h2>
        </div>
    )
}

export default LogoWithText;