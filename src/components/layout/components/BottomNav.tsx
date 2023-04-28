import { Button, Card, Col, Row, Space, Switch } from 'antd'
import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { useRouter } from 'next/router';

interface BottomNavProps {
  setDartMode: Dispatch<SetStateAction<boolean>>;
}

const menus = [
  { name: "trading", title: "Trading", icon: "", },
  { name: "algo", title: "Algo", icon: "", },
  { name: "backtesting", title: "Backtesting", icon: "", },
  { name: "amount", title: "$ 2,45,000", icon: "", },
  { name: "notes", title: "Notes", icon: "", },
  { name: "logs", title: "Logs", icon: "", },
]
export const BottomNav: FC<BottomNavProps> = ({ setDartMode }) => {
  const router = useRouter();

  const menuPressed = (name: string) => {
      router.push(`/${name}`)
  }

  const activeTab = useCallback((item: any) => {
    if (router.pathname === "/") {
      return false
    } else {
      const path = router.pathname.substring(1, router.pathname.length);
      return path.includes(item?.name)
    }
  }, [router.pathname])

  return (
    <Card size="small" style={{ marginTop: 10 }}>
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Space wrap>
            {menus.map((item) => {
              return (
                <Button
                  key={item.title}
                  size={"large"}
                  type={activeTab(item) ? "primary" : "default"}
                  onClick={() => menuPressed(item?.name)}>
                  {item.title}
                </Button>
              )
            })}
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