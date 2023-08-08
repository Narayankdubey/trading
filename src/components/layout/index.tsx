import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Typography,
  Tooltip,
  Button,
  Grid,
  theme,
  ConfigProvider,
} from "antd";
import { AnimatedPage, BottomNav, HeaderContainer } from "./components";
import PrivateRoute from "../hoc/AuthChecker";

type layoutContainerProps = {
  children: any;
};

const { Sider, Content, Footer, Header } = Layout;

const initialTheme = {
  primaryColor: "#1677ff",
  borderRadius: 5,
};

const LayoutContainer: React.FC<layoutContainerProps> = ({ children }) => {
  const [darkMode, setDartMode] = useState(false);
  const [localTheme, setLocalTheme] = useState(initialTheme);

  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();

  useEffect(() => {
    if (typeof localStorage !== "undefined")
      setLocalTheme(
        JSON.parse(
          localStorage ? localStorage.getItem("uiSetting") || "{}" : "{}"
        )
      );
  }, []);

  return (
    <PrivateRoute>
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: localTheme?.primaryColor || initialTheme.primaryColor,
            borderRadius: localTheme?.borderRadius || initialTheme.borderRadius,
          },
        }}
      >
        <Layout>
          <Header>
            <HeaderContainer setDartMode={setDartMode} />
          </Header>
          <Content
            style={{
              minHeight: "calc(100vh - 64px)",
              padding: 5,
            }}
          >
            {/* <AnimatedPage> */}
            {children}
            {/* </AnimatedPage> */}
          </Content>
          {/* <BottomNav setDartMode={setDartMode}/> */}
        </Layout>
      </ConfigProvider>
    </PrivateRoute>
  );
};

export default LayoutContainer;
