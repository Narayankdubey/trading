import React, { FC } from "react";
import { Card, Typography } from "antd";
import Head from "next/head";

interface registerProps {}

const Register: FC<registerProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Card>
        <Typography.Title>Register</Typography.Title>
      </Card>
    </>
  );
};

export default Register;
