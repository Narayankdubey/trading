import React, { useEffect, useState } from "react";
import { Button, List, Row, Skeleton, Switch, theme } from "antd";
import styles from "./index.module.css";
import { ReloadOutlined } from "@ant-design/icons";
import { getProviderLogo } from "@/constants";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getConnectedAcc } from "@/redux/slices/appSlice";
import moment from "moment";
import Image from "next/image";
import { ScreenLayout } from "./common/ScreenLayout";

const accData = [
  {
    integrationId: "12",
    uuid: "1af8fb63-d567-430f-9914-30d4be2a8f11",
    provider: "ICICI",
    clientId: "",
    clientName: "",
    createdAt: "2024-06-22T20:27:04.690075600Z",
  },
  {
    integrationId: "13",
    uuid: "f5cf8295-dc7f-4fda-9b3a-3601b77e45a6",
    provider: "ICICI",
    clientId: "AH059385",
    clientName: "AH059385",
    createdAt: "2024-06-22T20:27:04.690080400Z",
  },
];

export const ConnAppsList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const { useToken } = theme;
  const { token } = useToken();
  const router = useRouter();
  const { connAcc } = useAppSelector((state) => state.appSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getConnectedAcc());
    setInitLoading(false);
  }, []);

  const onActive = () => {};

  const component = (
    <>
      <Row style={{ justifyContent: "space-between" }}>
        <div />
        <div style={{ marginBottom: 14 }}>
          <Button
            style={{ marginRight: 5, backgroundColor: token.colorTextBase }}
            type="primary"
            onClick={() => {
              router.push("/stock/allApps");
            }}
          >
            Integrate New Account
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={() => dispatch(getConnectedAcc())}
          >
            Refresh
          </Button>
        </div>
      </Row>
      <List
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={connAcc}
        renderItem={(item) => (
          <List.Item
            key={item?.id}
            style={{
              backgroundColor: token.colorBgContainer,
              marginTop: "8px",
              marginBottom: "8px",
              borderRadius: "4px",
              boxShadow: `5px 5px 10px rgba(0, 0, 0, 0.2)`,
            }}
            actions={[
              <div key={"action"} className={styles.italic}>
                created on {moment(item.createdAt).format("DD MMM YYYY")}
              </div>,
              <Switch defaultChecked onChange={onActive} />,
            ]}
          >
            <Skeleton title={false} loading={item.loading} active>
              <List.Item.Meta
                className={styles.listItem}
                avatar={
                  <Image
                    alt={"logo"}
                    src={getProviderLogo(item)}
                    height={40}
                    width={80}
                  />
                }
                title={`${item.clientName} (${item.clientId})`}
                description={item.provider}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );

  return <ScreenLayout title="Connected accounts" component={component} />;
};
