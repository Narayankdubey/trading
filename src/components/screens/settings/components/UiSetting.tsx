import { Button, Card, Form, Input, InputNumber } from "antd";
import React, { FC } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

let initialTheme = {
  primaryColor: "#1677ff",
  borderRadius: 5
};

interface UiSettingProps {}

const UiSetting: FC<UiSettingProps> = ({}) => {
  const onFinish = (data: any) => {
    localStorage.setItem("uiSetting", JSON.stringify(data || {}));
    window.location.reload();
  };
  const resetTheme = () => {
    localStorage.removeItem("uiSetting");
    window.location.reload();
  };

  const getInitialData = () => {
    if (typeof localStorage !== "undefined") {
      const parsedData = JSON.parse(
        localStorage ? localStorage.getItem("uiSetting") || "{}" : "{}"
      );
      if (Object.keys(parsedData)?.length) initialTheme = parsedData;
    }
    
return initialTheme;
  };

  return (
    <>
      <Card title={"UI Settings"}>
        <Form
          {...layout}
          name="ui-settings"
          initialValues={getInitialData()}
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="primaryColor" label="Primary Color">
            <Input type="color" />
          </Form.Item>
          <Form.Item name="borderRadius" label="Border Radius">
            <InputNumber />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={resetTheme}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default UiSetting;
