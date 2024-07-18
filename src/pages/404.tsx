import { Button, Result } from "antd";
import React, { FC } from "react";
import { useRouter } from "next/router";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  const router = useRouter();
  const backToHome = () => {
    router.push("/");
  };
  
return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={backToHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
