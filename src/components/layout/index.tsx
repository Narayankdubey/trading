import React, { useEffect, useState } from "react";
import {
  Layout,
  Grid,
  theme,
  ConfigProvider,
} from "antd";
import { useAppSelector } from "@/redux/hooks";
import { AnimatedPage, HeaderContainer } from "./components";
import PrivateRoute from "../hoc/AuthChecker";
import ScrollUpAnimation from "../elements/animation/ScrollUpAnimation";

type layoutContainerProps = {
  children: any;
};

const { Sider, Content, Footer, Header } = Layout;

const initialTheme = {
  primaryColor: "#1677ff",
  borderRadius: 5,
  colorBgLayout:"red",
  colorBgContainer: 'green'
};

const LayoutContainer: React.FC<layoutContainerProps> = ({ children }) => {
  // const [darkMode, setDartMode] = useState(false);
  const [localTheme, setLocalTheme] = useState(initialTheme);

  const { darkTheme } = useAppSelector((state) => state.appSlice);

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
          algorithm: darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: localTheme?.primaryColor || initialTheme.primaryColor,
            borderRadius: localTheme?.borderRadius || initialTheme.borderRadius,
          },
        }}
      >
        <Layout>
          <Header style={{backgroundColor:darkTheme ?"#121212": "#d1cdcd" }}>
            <HeaderContainer />
          </Header>
          <Content
            style={{
              minHeight: "calc(100vh - 64px)",
              // padding: 5,
            }}
          >
            {/* <AnimatedPage> */}
            <ScrollUpAnimation>
            {children}
            </ScrollUpAnimation>
            {/* </AnimatedPage> */}
          </Content>
          {/* <BottomNav setDartMode={setDartMode}/> */}
        </Layout>
      </ConfigProvider>
    </PrivateRoute>
  );
};

export default LayoutContainer;
