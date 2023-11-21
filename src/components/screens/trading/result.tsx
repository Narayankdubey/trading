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
  Typography,
} from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { CSVLink } from "react-csv";

import PageHeader from "@/components/elements/PageHeader";
import { createColumns } from "@/utils/helper";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getRunData } from "@/redux/slices/backtestingSlice";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const { Title } = Typography;
const { Option } = Select;

type Props = {};

const ResultContainer = () => {
  const router = useRouter();
  const queryData = router.query;
  const dispatch = useAppDispatch();

  const [filterData, setFilterData] = useState({
    headers: [],
  });

  const { runData, runStatus } = useAppSelector(
    (state) => state.backtestingSlice
  );
  const loading = runStatus === "loading";

  const columns: ColumnsType<DataType> = createColumns(
    filterData?.headers || []
  );

  const onFilterChange = (value: any, key: string) => {
    setFilterData((old: any) => ({ ...old, [key]: value }));
  };

  const actionBtn = [
    <Button key="1">Repo Rts</Button>,
    <CSVLink
      key="2"
      data={runData.records || []}
      filename={`${queryData.title}.csv`}
    >
      <Button loading={loading}>Download CSV</Button>
    </CSVLink>,
  ];

  useEffect(() => {
    dispatch(getRunData({}));
  }, [dispatch]);

  useEffect(() => {
    setFilterData((old) => ({ ...old, headers: runData.columns || [] }));
  }, [runData]);

  return (
    <Row gutter={8}>
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
              maxHeight: "calc(100vh - 100px)",
              overflow: "auto",
            }}
            className="styledScrollBar"
            dataSource={runData.columns || []}
            renderItem={(item: any) => (
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
              <Select
                placeholder="watchlist"
                onChange={(e) => onFilterChange(e, "watchlist")}
              >
                <Option value="watchlist">WatchList</Option>
                <Option value="watchlist2">WatchList2</Option>
              </Select>
              <DatePicker />
              <DatePicker />
            </Space>
          </Row>
          <Table
            loading={loading}
            columns={columns || []}
            dataSource={runData.records || []}
            scroll={{ x: 300 }}
            pagination={{
              pageSize: 6,
            }}
          />
        </Flex>
      </Col>
    </Row>
  );
};

export default ResultContainer;
