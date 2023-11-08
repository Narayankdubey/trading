import React, { FC, useEffect, useContext } from "react";
import Image from "next/image";
import {
  Button,
  Form,
  Input,
  Card,
  Divider,
} from "antd";
import { useAppDispatch } from "@/redux/hooks";
import { signupAsync } from "@/redux/slices/authSlice";
import style from "./SignupContainer.module.css";
import { LogoWithText } from "@/components/elements";
import Link from "next/link";
import {
  MailOutlined,
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ROUTES } from "@/common/constants";
import AuthContext from "@/utils/AuthContext";
import { useRouter } from "next/router";

interface SignupContainerProps {}

const SignupContainer: FC<SignupContainerProps> = ({}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { authenticated } = useContext(AuthContext);

  const onFinish = (values: any) => {
    dispatch(signupAsync(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="enter your name" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="enter your password"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input prefix={<MailOutlined />} placeholder="enter your email" />
            </Form.Item>
            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[{ required: true, message: "Please input your Mobile!" }]}
            >
              <Input
                prefix={<MobileOutlined />}
                placeholder="enter your mobile"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Divider>OR</Divider>
          <Link href={"login"}>
            <Button block>Log In</Button>
          </Link>
        </Card>
        {/* </Col>
      </Row> */}
      </Card>
    </div>
  );
};

export default SignupContainer;
