import { portfolioOptions } from "@/config/blendPort/symbol";
import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  FormProps,
  Input,
  message,
  Row,
  Select,
  Space,
  Steps,
} from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addPortfolio } from "@/redux/slices/porfolioSlice";

const EQUITY = "equity";
const FUTURE = "future";

const { Option } = Select;
const { useForm } = Form;

const options = (arr: any) => (
  <>
    {arr.map((elem: string) => (
      <Option key={elem} value={elem}>
        {elem}
      </Option>
    ))}
  </>
);

const optKeyValue = (arr: { label: string; value: string }[]) =>
  arr.map((elem: { label: string; value: string }) => (
    <Option key={elem.value} value={elem?.value}>
      {elem.label}
    </Option>
  ));

const getExchangeOpt = (exc: string) => {
  switch (exc) {
    case FUTURE:
      return portfolioOptions.symbol;

    default:
      return [];
  }
};

const getStrikeOptions = (type: string) => {
  switch (type) {
    case "atm":
      return ["ATM+100", "ATM-100"];

    default:
      return ["22300", "22700"];
  }
};

const Form1 = () => {
  return (
    <>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your Title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your Description!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="segment" label="Segment" rules={[{ required: true }]}>
        <Select placeholder="Type">{options([EQUITY, FUTURE])}</Select>
      </Form.Item>
      <Form.Item
        shouldUpdate={(prevValues, currentValues) => {
          return (
            prevValues?.segment !== currentValues?.segment ||
            prevValues?.strikeSelection !== currentValues?.strikeSelection
          );
        }}
        noStyle
      >
        {({ getFieldValue }) => {
          const exc = getFieldValue("segment");
          const strikeSelection = getFieldValue("strikeSelection");

          return (
            <>
              {exc === FUTURE && (
                <>
                  <Form.Item
                    name="symbol"
                    label="Symbol"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Symbol">
                      {optKeyValue(getExchangeOpt(exc))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="strikeSelection"
                    label="strike selection"
                    rules={[{ required: true }]}
                  >
                    {
                      <Select placeholder="strike selection">
                        {optKeyValue([
                          {
                            label: "Absolute",
                            value: "ABS",
                          },
                          {
                            label: "Relative",
                            value: "REL",
                          },
                        ])}
                      </Select>
                    }
                  </Form.Item>
                  {strikeSelection === "REL" && (
                    <Form.Item
                      name="strikeType"
                      label="Strike Type"
                      rules={[{ required: true }]}
                    >
                      <Select placeholder="Strike Type">
                        {optKeyValue([
                          {
                            label: "ATM",
                            value: "atm",
                          },
                          {
                            label: "Delta",
                            value: "delta",
                          },
                          {
                            label: "Premium",
                            value: "premium",
                          },
                        ])}
                      </Select>
                    </Form.Item>
                  )}
                  <Form.Item
                    name="priceType"
                    label="price type"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="price type">
                      {optKeyValue([
                        {
                          label: "Spot",
                          value: "SPT",
                        },
                      ])}
                    </Select>
                  </Form.Item>
                </>
              )}
            </>
          );
        }}
      </Form.Item>
    </>
  );
};

const Form2 = ({ step }: { step: number }) => (
  <>
    <Form.List name="equityFormulation">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }, idx: number) => (
            <Row key={key} gutter={16} justify={"center"} align={"middle"}>
              <Form.Item
                {...restField}
                key={key}
                hidden={step !== 1}
                shouldUpdate={(prevValues, currentValues) => {
                  return (
                    prevValues?.segment !== currentValues?.segment ||
                    prevValues?.strikeType !== currentValues?.strikeType
                  );
                }}
                noStyle
              >
                {({ getFieldValue }) => {
                  const exc = getFieldValue("segment");
                  const strikeType = getFieldValue("strikeType");
                  const strikeSelection = getFieldValue("strikeSelection");
                  const symbol = getFieldValue("symbol");

                  return (
                    <>
                      {exc === EQUITY ? (
                        <>
                          <Col span={5}>
                            <Form.Item
                              label="Instrument"
                              name={[name, "instrument"]}
                              rules={[{ required: true }]}
                            >
                              <Select placeholder="Instrument">
                                {options(["SBIN", "TATA"])}
                              </Select>
                            </Form.Item>
                          </Col>
                        </>
                      ) : (
                        <>
                          <Col span={5}>
                            <Form.Item
                              label="Option Type"
                              name={[name, "optionType"]}
                              rules={[{ required: true }]}
                            >
                              <Select placeholder="Option Type">
                                {options(["CE", "PE"])}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item
                              label="strike"
                              name={[name, "strike"]}
                              rules={[{ required: true }]}
                            >
                              {strikeType === "atm" ||
                              strikeSelection === "ABS" ? (
                                <Select placeholder="strike">
                                  {options(
                                    getStrikeOptions(
                                      strikeType === "atm"
                                        ? strikeType
                                        : strikeSelection
                                    )
                                  )}
                                </Select>
                              ) : (
                                <Input type="number" />
                              )}
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item
                              label="EXP"
                              name={[name, "exp"]}
                              rules={[{ required: true }]}
                            >
                              <Select placeholder="strike">
                                {optKeyValue(
                                  portfolioOptions.exp?.[symbol] || []
                                )}
                              </Select>
                            </Form.Item>
                          </Col>
                        </>
                      )}
                      <Col span={4}>
                        <Form.Item
                          label="ratio"
                          name={[name, "ratio"]}
                          rules={[{ required: true }]}
                        >
                          <Input type="number" />
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <Space>
                          <CloseOutlined onClick={() => remove(name)} />
                          {idx === fields?.length - 1 && (
                            <PlusOutlined onClick={() => add()} />
                          )}
                        </Space>
                      </Col>
                    </>
                  );
                }}
              </Form.Item>
            </Row>
          ))}
          <Flex justify="center" style={{margin: 40}}>
          {fields?.length === 0 && (
            <Button icon={<PlusOutlined />} onClick={() => add()}>
              Add
            </Button>
          )}</Flex>
        </>
      )}
    </Form.List>
  </>
);

type Props = {};

const PortfolioCreatorContainer = (props: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [form] = useForm();
  const [step, setStep] = useState(0);
  const { id } = router.query;

  const { createStatus } = useAppSelector((state) => state.porfolioSlice);
  const loading = createStatus === "loading";

  const onBack = () => {
    if (step > 0) setStep((old) => old - 1);
  };

  const onStepChange = async () => {
    try {
      await form.validateFields();
      if (step < 1) setStep((old) => old + 1);
      else form.submit();
    } catch (e) {
      console.log(e, "e");
    }
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const formatted = {
      ...values,
      equityFormulation: values?.equityFormulation?.map((item) =>
        item?.ratio ? { ...item, ratio: parseInt(item?.ratio) } : item
      ),
    };
    const res = dispatch(addPortfolio({ formedData: formatted }));
    console.log(res, "res");
  };

  useEffect(() => {
    if (id) {
      console.log(id, "with id");
    }
  }, [id]);

  const firstStep = step === 0;

  return (
    <div>
      <Steps
        type="navigation"
        current={step}
        items={[
          {
            status: "process",
            title: "Step 1",
          },
          {
            status: "finish",
            title: "Step 2",
          },
        ]}
      />
      <Flex justify="center">
        <Form
          form={form}
          name="basic"
          layout={firstStep ? "horizontal" : "vertical"}
          labelCol={{ span: firstStep ? 6 : 24 }}
          wrapperCol={{ span: firstStep ? 18 : 24 }}
          style={{
            maxWidth: firstStep ? 600 : "none",
            padding: 8,
            width: "100%",
          }}
          initialValues={{ remember: true }}
          onFinish={firstStep ? () => {} : onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          preserve={true}
        >
          <Form.Item hidden={step !== 0} noStyle>
            <Form1 />
          </Form.Item>
          {step === 1 && <Form2 step={step} />}
          <Flex justify={firstStep ? "flex-end" : "center"} gap={8}>
            {step > 0 && (
              <Button type="default" onClick={onBack}>
                Back
              </Button>
            )}
            {/* <Form.Item wrapperCol={{ offset: 8, span: 24 }}> */}
            {/* {firstStep ? ( */}
            <Button
              type="primary"
              onClick={onStepChange}
              loading={loading}
              // htmlType={step === 0 ? "button" : "submit"}
            >
              {"Next"}
            </Button>
            {/* ) : (
            <Button
              type="primary"
              // onClick={step === 0 ? onStepChange : ()=>{}}
              htmlType={"submit"}
            >
              {"Submit"}
            </Button>
          )} */}
            {/* </Form.Item> */}
          </Flex>
        </Form>
      </Flex>
    </div>
  );
};

export default PortfolioCreatorContainer;
