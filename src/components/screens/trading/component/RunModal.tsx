import { DatePicker, Form, Input, Modal } from "antd";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  data: any;
  isRunModalOpen: boolean;
  setIsRunModalOpen: Dispatch<SetStateAction<boolean>>;
  setRunStrategyData: Dispatch<SetStateAction<any>>;
};

const RunModal = ({
  data,
  isRunModalOpen,
  setIsRunModalOpen,
  setRunStrategyData,
}: Props) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onCancel = () => {
    setIsRunModalOpen(false);
    setRunStrategyData({});
  };

  return (
    <Modal
      open={isRunModalOpen}
      title={data?.title || ""}
      okText="Run"
      cancelText="Cancel"
      onCancel={onCancel}
      width={"55%"}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            router.push({
              pathname: `backtesting/result/${data?.id}/`,
              query: {
                ...values,
                end: values.end.toString(),
                start: values.start.toString(),
              },
            });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} name="runData" layout="inline">
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please input the title",
            },
          ]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="start"
          rules={[
            {
              required: true,
              message: "Please input the start",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="end"
          rules={[
            {
              required: true,
              message: "Please input the End",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RunModal;
