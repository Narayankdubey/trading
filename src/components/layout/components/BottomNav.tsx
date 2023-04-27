import { Button, Card, Col, Row, Space, Switch } from 'antd'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'

interface BottomNavProps {
  setDartMode: Dispatch<SetStateAction<boolean>>;
}

const menus = [
  { name: "trading", title: "Trading", icon: "", },
  { name: "", title: "Alog", icon: "", },
  { name: "", title: "Backtesting", icon: "", },
  { name: "", title: "$ 2,45,000", icon: "", },
  { name: "", title: "Notes", icon: "", },
  { name: "", title: "Logs", icon: "", },
]
export const BottomNav: FC<BottomNavProps> = ({ setDartMode }) => {
  const [selected, setSelected] = useState("Trading");

  const menuPressed = (name:string)=>{
    setSelected(name);
  }
  return (
    <Card size="small">
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Space>
            {menus.map((item) => (
              <Button key={item.title} size={"large"} type={selected === item?.title ? "primary" : "default"} onClick={()=>menuPressed(item?.title)}>{item.title}</Button>
            ))}
          </Space>
        </Col>
        <Col>
          <Space>
            <Switch
              checkedChildren={"Dark"}
              unCheckedChildren={"Light"}
              defaultChecked
              onChange={() => setDartMode((old: boolean) => !old)}
            />
          </Space>
        </Col>
      </Row>
    </Card>
  )
}