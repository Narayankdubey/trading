import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { runStrategy } from "@/redux/slices/backtestingSlice";
import { DatePicker, Form, Input, Modal } from "antd";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  data: any;
  isRunModalOpen: boolean;
  setIsRunModalOpen: Dispatch<SetStateAction<boolean>>;
  setRunStrategyData: Dispatch<SetStateAction<any>>;
  setShowRefresh: Dispatch<SetStateAction<boolean>>;
};

const RunModal = ({
  data,
  isRunModalOpen,
  setIsRunModalOpen,
  setRunStrategyData,
  setShowRefresh
}: Props) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { startRunStatus } = useAppSelector((state) => state.backtestingSlice);
  const loading = startRunStatus === "loading";

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
      confirmLoading={loading}
      onOk={() => {
        form
          .validateFields()
          .then(async (values) => {
            await dispatch(
              runStrategy({
                ...values,
                strategyId: data?.id,
                start: values?.start.toISOString(),
                end: values?.end.toISOString(),
                type: "backtest"
              })
            );
            form.resetFields();
            setIsRunModalOpen(false);
            setTimeout(() => setShowRefresh(true), 50000);
          })
          .catch((info) => {
          });
      }}
    >
      <Form form={form} name="runData" layout="inline">
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please input the title"
            }
          ]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="start"
          rules={[
            {
              required: true,
              message: "Please input the start"
            }
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="end"
          rules={[
            {
              required: true,
              message: "Please input the End"
            }
          ]}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RunModal;
