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
  console.log(data, "data");
  return (
    <Modal
      open={isRunModalOpen}
      title="Create a new collection"
      okText="Run"
      cancelText="Cancel"
      onCancel={onCancel}
      width={"55%"}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            router.push("backtesting/result/" + data?.id,);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        // layout="vertical"
        name="form_in_modal"
        layout="inline"
      >
        <Form.Item
          name="title"
          //   label="Title"
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
          //   label="Start"
          rules={[
            {
              required: true,
              message: "Please input the start",
            },
          ]}
          //   wrapperCol={{ span: 12 }}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="end"
          //   label="End"
          // wrapperCol={{ span: 12 }}
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
