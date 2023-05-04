import React, { useState } from "react";
import { Layout, Menu, Typography, Tooltip, Button, Grid, theme, ConfigProvider, } from "antd";
import { AnimatedPage, BottomNav, HeaderContainer } from "./components";

type layoutContainerProps = {
  children: any
};

const { Sider, Content, Footer, Header } = Layout;

const LayoutContainer: React.FC<layoutContainerProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDartMode] = useState(true)

  let siderMenu: any[] = [];



  const currentMenuItem = () => {
    if (location.pathname === "/") {
      return [siderMenu[0]?.title];
    }
    const path = location.pathname.substring(1, location.pathname.length);
    return [siderMenu.filter((menu) => menu.route === path)[0]?.title];
  };

  // const handleNavigate = (route: string) => () => navigate(route);
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout
      >
        <Header>
        <HeaderContainer setDartMode={setDartMode}/>
        </Header>
        <Content style={{
          minHeight: "calc(100vh - 64px)",
          padding:5
        }}>
          <AnimatedPage>
            {children}
          </AnimatedPage>
        </Content>
        {/* <BottomNav setDartMode={setDartMode}/> */}
      </Layout>
    </ConfigProvider>
  );
};

export default LayoutContainer;
