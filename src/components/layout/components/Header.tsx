import { Avatar, Badge, Button, Card, Col, Dropdown, List, Popover, Row, Space, Switch } from 'antd'
import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { useRouter } from 'next/router';
import type { MenuProps } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined,BellOutlined } from '@ant-design/icons';
import { Logo } from '@/components/elements';
import Link from 'next/link';

interface HeaderContainerProps {
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

export const HeaderContainer: FC<HeaderContainerProps> = ({ setDartMode }) => {

  const menuItem = ["Profile", "Setting"]

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: "Setting",
      icon: <SettingOutlined />,
    },
    {
      key: '3',
      label: "Log Out",
      icon: <LogoutOutlined />,
    },
  ];

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

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  // };
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  const content = (
    <div
    id="scrollableDiv"
    style={{
      height: 400,
      overflow: 'auto',
    }}
  >
    <List
    size="small"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item style={{width:400}}>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="#">{item}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
  </div>
  );
  return (
    // <Card style={{padding:0}}>
    <Row justify={"space-between"} align={"middle"}>
      <Col span={1}>
        <Link href={"/"}>
          <Logo size={1} />
        </Link>
      </Col>
      <Col span={16}>
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
      <Col span={7}>
        <Row justify={"end"} align={"middle"} gutter={[8,8]}>
          <Space>
          <Switch
            checkedChildren={"Dark"}
            unCheckedChildren={"Light"}
            defaultChecked
            onChange={() => setDartMode((old: boolean) => !old)}
          />
          <Popover content={content} title="Notification" trigger="click" placement="bottomRight">
          <Badge count={8} overflowCount={9} size='small'>
          {/* <BellOutlined /> */}
          <Button type="primary" shape="circle" icon={<BellOutlined />} />
          </Badge>
          </Popover>
        <Dropdown menu={{ items }}>
          <Avatar shape="square" size={36} icon={<UserOutlined />} />
        </Dropdown>
        </Space>
        </Row>
      </Col>
    </Row>
    // </Card>
  )
}