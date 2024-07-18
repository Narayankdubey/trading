import { appListData } from "@/constants";
import { Button, Form, Input, Modal, theme } from "antd";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { useAppDispatch } from "@/redux/hooks";
import { connectAcc } from "@/redux/slices/appSlice";
import { ScreenLayout } from "./common/ScreenLayout";

export const ActivationForm = (props) => {
  const router = useRouter();
  const { useToken } = theme;
  const { token } = useToken();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { id } = router?.query;

  const fields = appListData?.filter((item) => item?.id == id)?.[0]
    ?.authorization?.fields;

  const handleSubmit = async (values) => {
    const res = await dispatch(connectAcc({ credential: values }));

    const success = () => {
      form.resetFields();
      Modal.success({
        title: "Success",
        content: "Credentials submitted successfully.",
        okButtonProps: {
          style: { backgroundColor: token.colorTextBase }
        },
        onOk: () => router.push("/stock")
      });
    };

    const error = () => {
      Modal.error({
        title: "Error",
        content: res?.error?.message || "Some error occured.",
        okButtonProps: {
          style: { backgroundColor: token.colorTextBase }
        }
      });
    };

    res?.payload?.data?.success ? success() : error();
  };

  const authForm = (
    <div className={styles.screen}>
      <Form
        layout="vertical"
        form={form}
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
        onFinish={handleSubmit}
      >
        {fields?.map((item, i) => (
          <Form.Item
            key={i}
            label={item.label}
            name={item.key}
            rules={[{ required: item.required, message: item.description }]}
          >
            <Input name={item.key} />
          </Form.Item>
        ))}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            style={{
              marginRight: 5,
              backgroundColor: token.colorTextBase
            }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  return <ScreenLayout title="Activation Form" component={authForm} />;
};
