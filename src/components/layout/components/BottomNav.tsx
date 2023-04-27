import { Button, Card, Space } from 'antd'
import React, { FC } from 'react'

interface BottomNavProps {

}

export const BottomNav: FC<BottomNavProps> = ({ }) => {
  const menus = [
    { name: "trading", title: "Trading", icon: "", },
    { name: "", title: "Alog", icon: "", },
    { name: "", title: "Backtesting", icon: "", },
    { name: "", title: "$ 2,45,000", icon: "", },
    { name: "", title: "Notes", icon: "", },
    { name: "", title: "Logs", icon: "", },
  ]
  return (
    <Card>
      <Space>
        {menus.map((item) => (
          <Button key={item.title} size={"large"}>{item.title}</Button>
        ))}
      </Space>
    </Card>
  )
}