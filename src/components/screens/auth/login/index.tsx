import React, { FC, useEffect, useContext } from "react";
import Image from "next/image";
import { Button, Form, Input, Card, Divider } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginAsync } from "@/redux/slices/authSlice";
import style from "./LoginContainer.module.css";
import { LogoWithText } from "@/components/elements";
import Link from "next/link";
import AuthContext from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { ROUTES } from "@/common/constants";

interface LoginContainerProps {}

const LoginContainer: FC<LoginContainerProps> = ({}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { authenticated } = useContext(AuthContext);
  const { status } = useAppSelector((state) => state.auth);
  const loading = status === "loading";

  const onFinish = (values: any) => {
    dispatch(loginAsync(values));
  };

  const onFinishFailed = (errorInfo: any) => {};

  useEffect(() => {
    if (authenticated) router.push(ROUTES.HOME);
  }, [authenticated, router]);

  return (
    <div className={style.container}>
      <Card
        className={style.loginCard}
        cover={
          <Image
            src={
              "https://images.unsplash.com/photo-1642790551116-18e150f248e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80"
            }
            fill
            alt="img"
            style={{ borderRadius: "8px" }}
          />
        }
      >
        {/* <Row className={style.subContainer}>
          <Col span={16}></Col>
          <Col span={8}> */}
        <Card
          title={<LogoWithText color="green" />}
          style={{ backgroundImage: "linear-gradient(white, #063469)" }}
        >
          <Form
            name="basic"
            layout="vertical"
            // labelCol={{ span: 24 }}
            //   wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, width: "100%" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                Submit
              </Button>
            </Form.Item>
            <Link href={"#"}>Forgotten Password?</Link>
          </Form>
          <Divider>OR</Divider>
          <Link href={"signup"}>
            <Button block>Create an account</Button>
          </Link>
        </Card>
        {/* </Col>
        </Row> */}
      </Card>
    </div>
  );
};

export default LoginContainer;
