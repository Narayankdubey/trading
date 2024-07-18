import React, { useEffect, useState } from "react";
import { Button, List, Skeleton, theme } from "antd";
import styles from "./index.module.css";
import { appListData } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { ScreenLayout } from "./common/ScreenLayout";

export const AppsList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const { useToken } = theme;
  const { token } = useToken();

  useEffect(() => {
    setInitLoading(false);
  }, []);

  const component = (
    <List
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={appListData}
      renderItem={(item) => {
        return (
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
              <Link
              key={"form"}
                href={{
                  pathname: "/stock/activateForm",
                  query: { id: item?.id },
                }}
              >
                <Button
                  style={{
                    marginRight: 5,
                    backgroundColor: token.colorTextBase,
                  }}
                  type="primary"
                >
                  Connect
                </Button>
                ,
              </Link>,
            ]}
          >
            <Skeleton title={false} loading={item.loading} active>
              <List.Item.Meta
                className={styles.listItem}
                avatar={
                  <Image alt={"logo"} src={item.logo} height={40} width={80} />
                }
                title={item.label}
                description={
                  <div>
                    Checkout {item.label} at
                    <a
                      className={styles.link}
                      target="_blank"
                      href={item?.website}
                    >
                      {item.website}
                    </a>
                  </div>
                }
              />
            </Skeleton>
          </List.Item>
        );
      }}
    />
  );

  return <ScreenLayout title="Available Apps" component={component} />;
};
