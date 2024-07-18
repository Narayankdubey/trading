import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Drawer,
  Dropdown,
  Grid,
  List,
  Popover,
  Row,
  Space,
  Switch,
} from "antd";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { useRouter } from "next/router";
import type { MenuProps } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
  MenuUnfoldOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Logo, LogoWithText } from "@/components/elements";
import Link from "next/link";
import { ROUTES } from "@/common/constants";
import { useAppDispatch } from "@/redux/hooks";
import { logOutAsync } from "@/redux/slices/authSlice";
import { appSlice } from "@/redux/slices/appSlice";

interface HeaderContainerProps {}

const menus = [
  // { name: "trading", title: "Trading", icon: "" },
  // { name: "algo", title: "Algo", icon: "" },
  // { name: "graph", title: "Graph", icon: "" },
  { name: "backtesting", title: "Backtesting", icon: "" },
  { name: "portfolio-creator", title: "Portfolio Creator", icon: "" },
  // { name: "amount", title: "$ 2,45,000", icon: "" },
  // { name: "notes", title: "Notes", icon: "" },
  // { name: "logs", title: "Logs", icon: "" },
];

export const HeaderContainer: FC<HeaderContainerProps> = ({}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const [open, setOpen] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
      icon: <UserOutlined />,
      onClick: () => router.push(`/${ROUTES.PROFILE}`),
    },
    {
      key: "2",
      label: "Settings",
      icon: <SettingOutlined />,
      onClick: () => router.push(`/${ROUTES.SETTINGS}`),
    },
    {
      key: "3",
      label: "Log Out",
      icon: <LogoutOutlined />,
      onClick: () => dispatch(logOutAsync()),
    },
  ];

  const menuPressed = (name: string) => {
    router.push(`/${name}`);
  };

  const activeTab = useCallback(
    (item: any) => {
      if (router.pathname === "/") {
        return false;
      } else {
        const path = router.pathname.substring(1, router.pathname.length);
        return path.includes(item?.name);
      }
    },
    [router.pathname]
  );

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  const content = (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: "auto",
      }}
    >
      <List
        size="small"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item style={{ width: 400 }}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="#">{item}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
  return (
    <Row justify={"space-between"} align={"middle"}>
      <Col sm={1} xs={3}>
        <Space align="center" style={{ width: "100%" }}>
          {!screen?.lg && (
            <MenuUnfoldOutlined
              onClick={showDrawer}
              style={{ fontSize: "1.2rem" }}
            />
          )}
          <Link href={"/"}>
            <Logo size={1} />
          </Link>
        </Space>
      </Col>
      {screen?.lg && (
        <Col span={16}>
          <Space wrap>
            {menus.map((item) => {
              return (
                <Button
                  key={item.title}
                  size={"large"}
                  type={activeTab(item) ? "dashed" : "text"}
                  onClick={() => menuPressed(item?.name)}
                >
                  {item.title}
                </Button>
              );
            })}
          </Space>
        </Col>
      )}
      <Drawer
        title={<LogoWithText />}
        placement={"left"}
        closable={true}
        onClose={onClose}
        open={open}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          {menus.map((item) => {
            return (
              <Button
                block
                key={item.title}
                size={"large"}
                type={activeTab(item) ? "primary" : "default"}
                onClick={() => menuPressed(item?.name)}
              >
                {item.title}
              </Button>
            );
          })}
        </Space>
      </Drawer>

      <Col span={7}>
        <Row justify={"end"} align={"middle"} gutter={[8, 8]}>
          <Space>
            <Button
              onClick={() => router.push(`/${ROUTES.INTEGRATION}`)}
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Integration
            </Button>
            <Switch
              checkedChildren={"Dark"}
              unCheckedChildren={"Light"}
              defaultChecked
              onChange={() => dispatch(appSlice.actions.toogleTheme())}
            />
            <Popover
              content={content}
              title="Notification"
              trigger="click"
              placement="bottomRight"
            >
              <Badge count={8} overflowCount={9} size="small">
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
  );
};
