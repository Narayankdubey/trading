"use client";
import React, { useEffect, useState } from "react";
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
  DatePicker,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd/es/form";

import { deFormatData } from "@/utils/helper";

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
  const formRef = React.useRef<FormInstance>(null);

  const parameter = (name: number, type: string) => {
    return (
      <Row>
        <Col span={24}>
          <Form.Item
            name={[name, `type_${type}`]}
            label="Type"
            rules={[{ required: true }]}
          >
            <Select placeholder="type">
              <Option value="attribute">Attribute</Option>
              <Option value="indicator">Indicator</Option>
              <Option value="value">Value</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => {
              return (
                prevValues["signals"][name]?.[`type_${type}`] !==
                currentValues["signals"][name]?.[`type_${type}`]
              );
            }}
          >
            {({ getFieldValue }) => {
              return getFieldValue("signals")[name]?.[`type_${type}`] ===
                "value" ? (
                <Form.Item
                  name={[name, `value_${type}`]}
                  label="Value"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Value" />
                </Form.Item>
              ) : (
                <>
                  <Form.Item
                    name={[name, `symbol_${type}`]}
                    label="Symbol"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Symbol">
                      <Option value="sbin">SBIN</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name={[name, `attribute_${type}`]}
                    label="Attribute"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Attribute">
                      <Option value="close">CLOSE</Option>
                      <Option value="open">OPEN</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Start" name={[name, `start_${type}`]}>
                    <DatePicker />
                  </Form.Item>
                  <Form.Item label="End" name={[name, `end_${type}`]}>
                    <DatePicker />
                  </Form.Item>
                  {getFieldValue("signals")[name]?.[`type_${type}`] ===
                    "indicator" && (
                    <Form.Item
                      name={[name, `timeperiod_${type}`]}
                      label="Timeperiod"
                      rules={[{ required: true }]}
                    >
                      <Select placeholder="Timeperiod">
                        <Option value="7days">7 Days</Option>
                        <Option value="14days">14 Days</Option>
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
    console.log("Success:", values);
  };

  useEffect(() => {
    const formRefTemp = formRef.current;
    if (strategyId) {
    }
    return () => {
      formRefTemp?.setFieldsValue({});
      setStrategyId("");
    };
  }, [setStrategyId, strategyId]);

  return (
    <Modal
      open={isStrategyModalOpen}
      footer={null}
      onCancel={() => setIsStrategyModalOpen(false)}
      width={"95%"}
    >
      <Form
        name="strategy"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
        ref={formRef}
      >
        <Row>
          <Col span={24}>
            <Row gutter={8}>
              <Col span={8}>
                <Form.Item
                  name="title"
                  rules={[
                    { required: true, message: "Please input your Title!" },
                  ]}
                >
                  <Input placeholder="Title" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="type" rules={[{ required: true }]}>
                  <Select placeholder="Type" allowClear>
                    <Option value="HISTORICAL">HISTORICAL</Option>
                    <Option value="type2">type2</Option>
                    <Option value="type3">type3</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={4}>
                <Title level={3}>BACKTEST</Title>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={18}>
            <div
              style={{
                maxHeight: "calc(100vh - 200px)",
                minHeight: "calc(100vh - 300px)",
                overflow: "auto",
              }}
            >
              <Row>
                <Col span={4}></Col>
                <Col span={8} style={{ textAlign: "center" }}>
                  <Title level={4}>Parameter 1</Title>
                </Col>
                <Col span={4} style={{ textAlign: "center" }}>
                  <Title level={4}>Operator</Title>
                </Col>
                <Col span={8} style={{ textAlign: "center" }}>
                  <Title level={4}>Parameter 2</Title>
                </Col>
              </Row>
              <Form.List name="signals">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <>
                        <Card size="small">
                          <Row gutter={8} style={{ marginBottom: 16 }}>
                            <Col span={3}>
                              <Form.Item
                                {...restField}
                                name={[name, "transaction"]}
                                rules={[{ required: true }]}
                              >
                                <Select placeholder="Transaction" allowClear>
                                  <Option value="BUY">BUY</Option>
                                  <Option value="SELL">SELL</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span={8}>{parameter(name, "param1")}</Col>
                            <Col>
                              <Form.Item
                                {...restField}
                                name={[name, "operator"]}
                                rules={[{ required: true }]}
                              >
                                <Select placeholder="Operator" allowClear>
                                  <Option value="GT">GT</Option>
                                  <Option value="LTE">LTE</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col span={8}>{parameter(name, "param2")}</Col>
                            <Col
                              span={1}
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "baseline",
                              }}
                            >
                              <MinusCircleOutlined
                                onClick={() => remove(name)}
                              />
                            </Col>
                          </Row>
                        </Card>
                      </>
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
          <Col span={6}>
            <Card style={{ height: "50%" }}></Card>
            <Card style={{ height: "50%" }}></Card>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default StrategyModal;
