import React from "react";
import { Button, Result } from "antd";
import { useRouter } from "next/router";

type Props = {};

const ErrorFallback = (props: Props) => {
  const router = useRouter();
  const backToHome = () => {
    router.push("/");
  };

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={backToHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorFallback;
