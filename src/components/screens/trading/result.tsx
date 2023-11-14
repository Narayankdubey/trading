import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Flex,
  List,
  Row,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import { useRouter } from "next/router";
import React from "react";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";
import PageHeader from "@/components/elements/PageHeader";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const { Title } = Typography;
const { Option } = Select;

type Props = {};

const ResultContainer = () => {
  const router = useRouter();
  const queryData = router.query;
  const onFilterChange = () => {};

  const actionBtn = [
    <Button key="1">Repo Rts</Button>,
    <Button key="2">Download CSV</Button>,
  ];

  return (
    <Row gutter={8}>
      <Col span={4}>
        <Checkbox.Group style={{ width: "100%" }} onChange={onFilterChange}>
          <List
            size="small"
            header={"Filter"}
            bordered
            style={{ width: "100%" }}
            dataSource={["firsr", "second", "third", "fourth"]}
            renderItem={(item) => (
              <List.Item>
                <Checkbox value={item}>{item}</Checkbox>
              </List.Item>
            )}
          />
        </Checkbox.Group>
      </Col>
      <Col span={20}>
        <Flex vertical gap={8}>
          <PageHeader title={queryData?.title} extra={actionBtn} />
          <Row>
            <Space>
              <Select placeholder="watchlist">
                <Option>WATchList</Option>
              </Select>
              <DatePicker/>
              <DatePicker />
            </Space>
          </Row>
          <Table columns={columns} dataSource={data} />
        </Flex>
      </Col>
    </Row>
  );
};

export default ResultContainer;
