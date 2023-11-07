import {
  Button,
  Card,
  Col,
  List,
  Row,
  Space,
  Typography,
  Flex,
  Modal,
  Pagination,
  Tooltip,
  Tag,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlayCircleOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import type { PaginationProps } from "antd";
import React, { FC, useEffect, useMemo, useState } from "react";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import TradingFilter from "./component/BacktestingFilter";
import StrategyModal from "./component/StrategyModal";
import {
  deleteStrategies,
  getStrategiesListdata,
} from "@/pages/backtesting/backtestingSlice";
import { getColorByStatus } from "@/utils/helper";
import RunModal from "./component/RunModal";

const { Paragraph, Title, Text } = Typography;
const { confirm } = Modal;

interface BacktesingProps {}

const BacktestingContainer: FC<BacktesingProps> = ({}) => {
  const dispatch = useAppDispatch();
  const [filteredData, setFilteredData] = useState<any>([]);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [strategyId, setStrategyId] = useState("");
  const [isRunModalOpen, setIsRunModalOpen] = useState(false);
  const [runStrategyData, setRunStrategyData] = useState("");
  const [filterData, setFilterData] = useState({});
  const [currentPage, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const { status, strategiesList, deleteStatus } = useAppSelector(
    (state) => state.backtestingSlice
  );
  const loading = status === "loading";

  const getOptions = (key: string, data: any) => {
    let result: any = [];
    data?.length && data.map((item: any) => result?.push(item[key]));
    return [...new Set(result)];
  };

  const onDeleteStrategy = (id: string) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        await dispatch(deleteStrategies(id));
      },
    });
  };

  const onPageChange: PaginationProps["onChange"] = (page) => {
    setPageCurrent(page);
  };

  const onFilter = (key: string, value: any) => {
    setFilterData((old: any) => ({ ...old, [key]: value }));
  };

  const filterElement = useMemo(() => {
    const data = filteredData;
    let result: any = [];
    ["status"].forEach((item) => {
      let obj = {
        name: item,
        options: getOptions(item, data),
      };
      result.push(obj);
    });
    return result;
  }, [filteredData]);

  const listItem = (data: any) => (
    <Row style={{ width: "100%" }}>
      <Col span={7}>
        <Title level={4} style={{ marginBottom: 0 }}>
          {data?.title}
        </Title>
        <Text italic disabled>
          {data?.id}
        </Text>
        {/* <Paragraph>{data?.backtest}</Paragraph> */}
      </Col>
      <Col span={5}>
        {/* <Paragraph>{data?.buy1}</Paragraph>
        <Paragraph>{data?.sell}</Paragraph>
        <Paragraph>{data?.buy2}</Paragraph> */}
      </Col>
      <Col span={5}>
        {/* <Paragraph>{data?.sbin}</Paragraph>
        <Paragraph>{data?.tata}</Paragraph> */}
      </Col>
      <Col span={6}>
        <Tag color={getColorByStatus(data?.status)}>{data?.status}</Tag>
        {/* <Paragraph>{moment(data?.time).format("dd/mm/yy")}</Paragraph> */}
      </Col>
      <Col span={1}>
        <Space direction="vertical">
          <Tooltip title="Play">
            <Button
              icon={<PlayCircleOutlined />}
              onClick={() => {
                setRunStrategyData(data);
                setIsRunModalOpen(true);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title="Edit">
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setIsStrategyModalOpen(true), setStrategyId(data?.id);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              icon={<DeleteOutlined />}
              danger
              onClick={() => onDeleteStrategy(data?.id)}
            ></Button>
          </Tooltip>
        </Space>
      </Col>
    </Row>
  );

  useEffect(() => {
    dispatch(
      getStrategiesListdata({
        ...filterData,
        ...{ page: currentPage, pageSize },
      })
    );
  }, [currentPage, dispatch, filterData, pageSize]);

  useEffect(() => {
    setFilteredData(strategiesList?.data);
  }, [strategiesList]);

  return (
    <Row gutter={8}>
      <Col span={4}>
        <TradingFilter
          data={filterElement}
          loading={loading}
          filterData={filterData}
          onFilter={onFilter}
        />
      </Col>
      <Col span={20}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <Flex justify="flex-end">
              <Button
                onClick={() => setIsStrategyModalOpen(true)}
                icon={<PlusOutlined />}
              >
                Add
              </Button>
            </Flex>
          </Col>
          <Col span={24}>
            <Card size="small">
              <List
                size="small"
                dataSource={filteredData}
                renderItem={(item) => <List.Item>{listItem(item)}</List.Item>}
                loading={loading}
              />
            </Card>
            <Flex justify="flex-end" style={{ marginTop: 10 }}>
              <Pagination
                current={currentPage}
                onChange={onPageChange}
                total={strategiesList?.total}
                pageSize={pageSize}
                showSizeChanger
                onShowSizeChange={(_, next) => setPageSize(next)}
                // hideOnSinglePage
              />
              ;
            </Flex>
          </Col>
        </Row>
      </Col>
      {isStrategyModalOpen && (
        <StrategyModal
          isStrategyModalOpen={isStrategyModalOpen}
          setIsStrategyModalOpen={setIsStrategyModalOpen}
          strategyId={strategyId}
          setStrategyId={setStrategyId}
        />
      )}
      {isRunModalOpen && (
        <RunModal
          data={runStrategyData}
          isRunModalOpen={isRunModalOpen}
          setIsRunModalOpen={setIsRunModalOpen}
          setRunStrategyData={setRunStrategyData}
        />
      )}
    </Row>
  );
};

export default BacktestingContainer;
