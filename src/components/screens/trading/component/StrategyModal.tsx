import React, { memo, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Modal,
  Row,
  Typography,
  Form,
  Input,
  Select,
  Spin,
  Divider,
} from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import style from "@/styles/Backtesting.module.css";
import { deFormatData, formData } from "@/utils/helper";
import {
  addStrategies,
  getStrategies,
  updateStrategies,
} from "@/redux/slices/backtestingSlice";

import { backtestingConstant } from "@/common/constants";
const constants = backtestingConstant.form;

const { Title } = Typography;
const { Option } = Select;

type Props = {
  isStrategyModalOpen: boolean;
  setIsStrategyModalOpen: (boolean: boolean) => void;
  strategyId?: string;
  setStrategyId: (a: string) => void;
};

const StrategyModal = ({
  isStrategyModalOpen,
  setIsStrategyModalOpen,
  strategyId,
  setStrategyId,
}: Props) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const { strategiesStatus, strategies } = useAppSelector(
    (state) => state.backtestingSlice
  );
  const loading = strategiesStatus === "loading";

  const options = (arr: any) => (
    <>
      {arr.map((elem: string) => (
        <Option key={elem} value={elem}>
          {elem}
        </Option>
      ))}
    </>
  );

  const parameter = (subName: number, name: number, type: string) => {
    return (
      <Row>
        <Col span={24}>
          <Form.Item
            name={[subName, `type_${type}`]}
            label="Type"
            rules={[{ required: true }]}
          >
            <Select placeholder="type">
              {options(constants.parameterType)}
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => {
              return (
                prevValues?.["signals"]?.[name]?.["conditions"][subName]?.[
                  `type_${type}`
                ] !==
                currentValues?.["signals"]?.[name]?.["conditions"][subName]?.[
                  `type_${type}`
                ]
              );
            }}
          >
            {({ getFieldValue }) => {
              return getFieldValue("signals")[name]?.["conditions"][subName]?.[
                `type_${type}`
              ] === "value" ? (
                <Form.Item
                  name={[subName, `value_${type}`]}
                  label="Value"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Value" />
                </Form.Item>
              ) : (
                <>
                  <Form.Item
                    name={[subName, `symbol_${type}`]}
                    label="Symbol"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Symbol">
                      {options(constants.symbol)}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name={[subName, `attribute_${type}`]}
                    label="Attribute"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Attribute">
                      {options(constants.attribute)}
                    </Select>
                  </Form.Item>
                  {/* <Form.Item label="Start" name={[subName, `start_${type}`]}>
                    <DatePicker />
                  </Form.Item>
                  <Form.Item label="End" name={[subName, `end_${type}`]}>
                    <DatePicker />
                  </Form.Item> */}
                  <Form.Item
                    name={[subName, `timeframe_${type}`]}
                    label="Timeframe"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Timeframe">
                      {options(constants.timeframe)}
                    </Select>
                  </Form.Item>
                  {getFieldValue("signals")[name]?.["conditions"][subName]?.[
                    `type_${type}`
                  ] === "indicator" && (
                    <Form.Item
                      name={[subName, `timeperiod_${type}`]}
                      label="Timeperiod"
                      rules={[{ required: true }]}
                    >
                      <Select placeholder="Timeperiod">
                        {options(constants.timePeriod)}
                      </Select>
                    </Form.Item>
                  )}
                </>
              );
            }}
          </Form.Item>
        </Col>
      </Row>
    );
  };

  const onFinish = (values: any) => {
    const formedData = formData(values);
    if (strategyId) dispatch(updateStrategies({ formedData, strategyId }));
    else dispatch(addStrategies(formedData));
  };

  const onModalClose = () => {
    form.setFieldsValue({});
    setStrategyId("");
    setIsStrategyModalOpen(false);
  };

  useEffect(() => {
    if (strategyId) {
      dispatch(getStrategies(strategyId));
      form.setFieldsValue(deFormatData(strategies));
    }
  }, [dispatch, form, setStrategyId, strategies, strategyId]);

  return (
    <Modal
      open={isStrategyModalOpen}
      footer={null}
      onCancel={onModalClose}
      width={"100%"}
      style={{ top: 30 }}
    >
      <Spin spinning={loading}>
        <Form
          name="strategy"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Row gutter={8}>
            <Col span={24}>
              <Row gutter={8}>
                <Col span={8}>
                  <Form.Item
                    name="title"
                    rules={[
                      { required: true, message: "Please input your Title!" },
                    ]}
                  >
                    <Input placeholder="Title" size="large" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="type" rules={[{ required: true }]}>
                    <Select placeholder="Type" allowClear size="large">
                      {options(constants.type)}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Title level={3}>BACKTEST</Title>
                </Col>

                <Col span={4}>
                  <Form.Item wrapperCol={{ span: 22 }}>
                    <Button type="primary" htmlType="submit" block>
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={20}>
              <Card size="small">
                <Row>
                  <Col span={4}></Col>
                  <Col span={7} style={{ textAlign: "center" }}>
                    <Title level={5}>Parameter 1</Title>
                  </Col>
                  <Divider type="vertical" style={{ height: "32px" }} />
                  <Col span={3} style={{ textAlign: "center" }}>
                    <Title level={5}>Operator</Title>
                  </Col>
                  <Divider type="vertical" style={{ height: "32px" }} />
                  <Col span={6} style={{ textAlign: "center" }}>
                    <Title level={5}>Parameter 2</Title>
                  </Col>
                </Row>
              </Card>
              <div className={`${style.dynamicFormContainer} styledScrollBar`}>
                <Form.List name="signals">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Card size="small" key={key}>
                          <Row gutter={8} style={{ marginBottom: 16 }}>
                            <Col span={3}>
                              <Form.Item
                                {...restField}
                                name={[name, "transaction"]}
                                rules={[{ required: true }]}
                                wrapperCol={{ span: 24 }}
                              >
                                <Select placeholder="Transaction" allowClear>
                                  {options(constants.transaction)}
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span={20}>
                              <Form.List name={[name, "conditions"]}>
                                {(subFields, subOpt) => (
                                  <>
                                    {subFields.map((subField) => (
                                      <Card size="small" key={subField.key}>
                                        <Row>
                                          <Col span={9}>
                                            {parameter(
                                              subField.name,
                                              name,
                                              "param1"
                                            )}
                                          </Col>
                                          <Col
                                            span={4}
                                            style={{ marginLeft: "auto" }}
                                          >
                                            <Form.Item
                                              name={[subField.name, "operator"]}
                                              rules={[{ required: true }]}
                                              wrapperCol={{ span: 20 }}
                                            >
                                              <Select
                                                placeholder="Operator"
                                                allowClear
                                              >
                                                {options(constants.operator)}
                                              </Select>
                                            </Form.Item>
                                          </Col>
                                          <Col span={9}>
                                            {parameter(
                                              subField.name,
                                              name,
                                              "param2"
                                            )}
                                          </Col>
                                          <Col
                                            span={1}
                                            style={{
                                              display: "flex",
                                              justifyContent: "flex-end",
                                              alignItems: "baseline",
                                            }}
                                          >
                                            <MinusCircleOutlined
                                              onClick={() =>
                                                subOpt.remove(subField.name)
                                              }
                                            />
                                          </Col>
                                        </Row>
                                      </Card>
                                    ))}
                                    <Form.Item>
                                      <Button
                                        type="dashed"
                                        onClick={() => subOpt.add()}
                                        icon={<PlusOutlined />}
                                      >
                                        Add Conditions
                                      </Button>
                                    </Form.Item>
                                  </>
                                )}
                              </Form.List>
                            </Col>
                            <Col
                              span={1}
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "baseline",
                              }}
                            >
                              <CloseOutlined onClick={() => remove(name)} />
                            </Col>
                          </Row>
                        </Card>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          icon={<PlusOutlined />}
                        >
                          Add field
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
            </Col>
            <Col span={4}>
              <Card
                type="inner"
                title="Information"
                style={{ height: "30%" }}
              ></Card>
              <Card
                type="inner"
                title="Orders"
                className="styledScrollBar"
                style={{
                  minHeight: "70%",
                  overflow: "auto",
                  maxHeight: "300px",
                  marginTop: "8px",
                }}
              >
                <Form.List name="orderList">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Row key={key} gutter={8}>
                          <Col span={22}>
                            <Form.Item
                              name={[name, "symbol"]}
                              rules={[{ required: true }]}
                              wrapperCol={{ span: 24 }}
                            >
                              <Select placeholder="Symbol" allowClear>
                                {options(constants.symbol)}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={2}>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              {...restField}
                              name={[name, "buy"]}
                              rules={[
                                {
                                  required: true,
                                  // message: "Missing first name",
                                },
                              ]}
                              wrapperCol={{ span: 24 }}
                            >
                              <Input type="number" placeholder="buy" />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              {...restField}
                              name={[name, "sell"]}
                              rules={[
                                {
                                  required: true,
                                  // message: "Missing last name",
                                },
                              ]}
                              wrapperCol={{ span: 24 }}
                            >
                              <Input type="number" placeholder="Sell" />
                            </Form.Item>
                          </Col>
                          <Divider />
                        </Row>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Add
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </Card>
            </Col>
          </Row>
        </Form>
      </Spin>
    </Modal>
  );
};

export default memo(StrategyModal);
