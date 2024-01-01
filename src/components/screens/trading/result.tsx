import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Empty,
  Flex,
  Layout,
  List,
  Row,
  Select,
  Space,
  Statistic,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { CSVLink } from "react-csv";
import { DoubleRightOutlined } from '@ant-design/icons';

import PageHeader from "@/components/elements/PageHeader";
import { createColumns } from "@/utils/helper";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getRunData } from "@/redux/slices/backtestingSlice";

import dayjs from "dayjs";


const { Sider } = Layout;

interface insightsProps {
  data: any;
  loading: boolean;
}

const Insights = ({ data, loading }: insightsProps) => (
  <>
    <Flex
      justify="center"
      gap={8}
      style={{ flexDirection: "column", margin: 8 }}
    >
      {Object.keys(data).length > 0 ? (
        Object.keys(data).map((item) => (
          <Card bordered={false} key={item}>
            <Statistic
              title={item}
              value={data[item]}
              precision={2}
              valueStyle={{ color: data[item] <= 0 ? "red" : "#3f8600" }}
              // prefix={<ArrowUpOutlined />}
              // suffix="%"
              loading={loading}
            />
          </Card>
        ))
      ) : (
        <Empty />
      )}
    </Flex>
  </>
);

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const { Option } = Select;


const ResultContainer = () => {
  const dispatch = useAppDispatch();

  const [filterData, setFilterData] = useState({
    headers: [],
  });
  const [repoRtsOpen, setRepoRtsOpen] = useState(true);

  const { runData, runStatus } = useAppSelector(
    (state) => state.backtestingSlice
  );
  const loading = runStatus === "loading";

  const { darkTheme } = useAppSelector((state) => state.appSlice);

  const columns: ColumnsType<DataType> = createColumns(
    filterData?.headers || []
  );

  const onFilterChange = (value: any, key: string) => {
    setFilterData((old: any) => ({ ...old, [key]: value }));
  };

  const actionBtn = [
    <CSVLink
      key="2"
      data={runData.records || []}
      filename={`${runData?.title}.csv`}
    >
      <Button loading={loading}>Download CSV</Button>
    </CSVLink>,
    <Button key="1" onClick={() => setRepoRtsOpen((old) => !old)}>
      Repo Rts
    </Button>,
  ];

  useEffect(() => {
    dispatch(getRunData({}));
  }, [dispatch]);

  useEffect(() => {
    setFilterData((old) => ({ ...old, headers: runData.columns || [] }));
  }, [runData]);

  return (
    <Layout hasSider className="mt-5" style={{ width: "100%" }}>
      <Row gutter={8} style={{ width: "100%" }}>
        <Col span={4}>
          <Checkbox.Group
            value={filterData?.headers}
            style={{ width: "100%" }}
            onChange={(value) => onFilterChange(value, "headers")}
          >
            <List
              loading={loading}
              size="small"
              header={"Filter"}
              bordered
              style={{
                width: "100%",
                maxHeight: "calc(100vh - 70px)",
                overflow: "auto",
              }}
              className="styledScrollBar"
              dataSource={runData?.columns?.toSorted() || []}
              renderItem={(item: any) => (
                <List.Item>
                  <Checkbox value={item}>{item}</Checkbox>
                </List.Item>
              )}
            />
          </Checkbox.Group>
        </Col>
        <Col span={20}>
          <Flex vertical gap={8} style={{ width: "100%" }}>
            <PageHeader title={runData?.title || " "} extra={actionBtn} />
            <Row>
              <Space>
                <Select
                  disabled
                  placeholder="Watchlist"
                  value={runData?.watchlist}
                  onChange={(e) => onFilterChange(e, "watchlist")}
                >
                  {/* <Option value="watchlist">WatchList</Option>
                  <Option value="watchlist2">WatchList2</Option> */}
                </Select>
                <DatePicker placeholder="Start" value={dayjs(runData?.start)} disabled/>
                <DatePicker placeholder="End" value={dayjs(runData?.end)} disabled/>
              </Space>
            </Row>
            <Table
              loading={loading}
              columns={columns || []}
              dataSource={runData?.records || []}
              scroll={{ x: 300, y: `calc(100vh - 300px)` }}
              sticky={{ offsetHeader: 64 }}
              pagination={{
                defaultPageSize: 100
              }}
            />
          </Flex>
        </Col>
      </Row>
      <Sider
        trigger={null}
        width={250}
        collapsible
        collapsed={repoRtsOpen}
        collapsedWidth={0}
        defaultCollapsed
        reverseArrow
        theme={darkTheme ? "dark" : "light"}
        onCollapse={() => setRepoRtsOpen(false)}
        style={{
          height: "calc(100vh - 70px)",
          marginLeft: 5,
        }}
      >
        <Flex justify="space-between" align="center" style={{ padding: 5 }}>
          <Typography.Title
            level={4}
            style={{ textAlign: "center", marginBottom: 0 }}
          >
            Insights
          </Typography.Title>
          <Button shape="circle" icon={<DoubleRightOutlined />} onClick={() => setRepoRtsOpen(true)}/>
        </Flex>
        <Divider />
        <Insights data={runData?.insights || {}} loading={loading} />
      </Sider>
    </Layout>
  );
};

export default ResultContainer;
