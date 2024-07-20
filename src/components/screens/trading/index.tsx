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
  Collapse,
  Table
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlayCircleOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
  ReloadOutlined
} from "@ant-design/icons";
import type { PaginationProps } from "antd";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import BacktestingFilter from "./component/BacktestingFilter";
import StrategyModal from "./component/StrategyModal";
import {
  deleteStrategies,
  getHistoryData,
  getStrategiesListdata,
  backtesingSlice
} from "@/redux/slices/backtestingSlice";
import { createColumns, getColorByStatus } from "@/utils/helper";
import RunModal from "./component/RunModal";
import { backtestingConstant } from "@/common/constants";
import Link from "next/link";

const { Title, Text, Paragraph } = Typography;
const { confirm } = Modal;
const { Panel } = Collapse;

interface BacktesingProps {}

const BacktestingContainer: FC<BacktesingProps> = ({}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [filteredData, setFilteredData] = useState<any>([]);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState({
    open: false,
    id: ""
  });
  const [isRunModalOpen, setIsRunModalOpen] = useState(false);
  const [runStrategyData, setRunStrategyData] = useState("");
  const [filterData, setFilterData] = useState({});
  const [currentPage, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [historyActiveKey, setHistoryActiveKey] = useState(-1);
  const [showRefresh, setShowRefresh] = useState(false);

  const { status, strategiesList, historyData, historyStatus } = useAppSelector(
    (state) => state.backtestingSlice
  );
  const loading = status === "loading";
  const historyLoading = historyStatus === "loading";

  const getOptions = (key: string, data: any) => {
    const result: any = [];
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
        await dispatch(
          deleteStrategies({
            id,
            filterDetails: {
              ...filterData,
              ...{ page: currentPage, pageSize }
            }
          })
        );
      }
    });
  };

  const onPageChange: PaginationProps["onChange"] = (page) => {
    setPageCurrent(page);
  };

  const onFilter = (key: string, value: any) => {
    if (key === "title")
      setFilterData((old: any) => ({ ...old, [key]: value }));
    else {
      if (filterData.hasOwnProperty(key)) {
        // @ts-ignore
        if (filterData[key]?.includes(value)) {
          setFilterData((old: any) => ({
            ...old,
            // @ts-ignore
            [key]: filterData[key].filter((item: string) => item != value)
          }));
        } else
          setFilterData((old: any) => ({
            ...old,
            // @ts-ignore
            [key]: [...filterData[key], value]
          }));
      } else {
        setFilterData((old: any) => ({ ...old, [key]: [value] }));
      }
    }
  };

  const collapseHandle = (e: any) => {
    dispatch(backtesingSlice.actions.resetHistoryData());

    if (e.length) {
      setHistoryActiveKey(e[1]);
      dispatch(getHistoryData({ strategyId: e[1] }));
    } else setHistoryActiveKey(-1);
  };

  const handleRefresh = () => {
    dispatch(
      getStrategiesListdata({
        ...filterData,
        ...{ page: currentPage, pageSize }
      })
    );
    setShowRefresh(false);
  };

  const applyFilter = () => {
    dispatch(
      getStrategiesListdata({
        ...filterData,
        ...{ page: currentPage, pageSize }
      })
    );
  };

  const filterElement = useMemo(() => {
    const data = filteredData;
    const result: any = [];
    backtestingConstant.filterElement.forEach((item) => {
      const obj = {
        name: item,
        options: getOptions(item, data)
      };
      result.push(obj);
    });

    return result;
  }, [filteredData]);

  const listItem = (data: any) => (
    <Row style={{ width: "100%" }} gutter={[0, 8]}>
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
                setIsStrategyModalOpen({ open: true, id: data?.id });
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
      <Col span={24}>
        <Collapse onChange={collapseHandle} activeKey={historyActiveKey}>
          <Panel header="History" key={data?.id}>
            <Table
              loading={historyLoading}
              columns={[
                ...createColumns(backtestingConstant.historyColumns),
                {
                  title: "Action",
                  fixed: "right",
                  width: 100,
                  render: (elem: any) => (
                    <Link href={`/backtesting/result/${elem?.id}`}>Go</Link>
                  )
                }
              ]}
              dataSource={historyData?.data || []}
              scroll={{ x: 300 }}
            />
            {/* <List
              size="small"
              dataSource={historyData?.data || []}
              renderItem={(item: any) => (
                <List.Item
                  onClick={() =>
                    router.push({
                      pathname: `backtesting/result/${item?.id}/`,
                      query: {
                        ...item,
                        end: item.end.toString(),
                        start: item.start.toString(),
                      },
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <Title level={5}>{item?.title}</Title>
                    <Text>{item?.strategyId}</Text>
                    <Paragraph>{item?.status}</Paragraph>
                  </div>
                </List.Item>
              )}
              loading={historyLoading}
            /> */}
            {/* {historyData?.data?.map((item: any, i: number) => (
              <Card key={i} size="small" loading={historyLoading}>
              <Link href={`/backtesting/result/${item?.id}?title=checking`}>
                {item?.title}
              </Link>
            </Card>
            ))} */}
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );

  useEffect(() => {
    //Debounced api call
    const timer = setTimeout(
      () =>
        dispatch(
          getStrategiesListdata({
            ...filterData,
            ...{ page: currentPage, pageSize }
          })
        ),
      600
    );

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, dispatch, pageSize]);

  useEffect(() => {
    setFilteredData(strategiesList?.data);
  }, [strategiesList]);

  return (
    <div className="m-5">
      <Row gutter={8}>
        <Col span={4}>
          <BacktestingFilter
            data={filterElement}
            loading={loading}
            filterData={filterData}
            onFilter={onFilter}
            applyFilter={applyFilter}
          />
        </Col>
        <Col span={20}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Flex justify="flex-end" gap={8}>
                {showRefresh && (
                  <Button onClick={handleRefresh} icon={<ReloadOutlined />}>
                    Refresh
                  </Button>
                )}
                <Button
                  onClick={() => setIsStrategyModalOpen({ open: true, id: "" })}
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
              </Flex>
            </Col>
          </Row>
        </Col>
        {isStrategyModalOpen?.open && (
          <StrategyModal
            isStrategyModalOpen={isStrategyModalOpen}
            setIsStrategyModalOpen={setIsStrategyModalOpen}
            filterDetails={{
              ...filterData,
              ...{ page: currentPage, pageSize }
            }}
          />
        )}
        {isRunModalOpen && (
          <RunModal
            data={runStrategyData}
            isRunModalOpen={isRunModalOpen}
            setIsRunModalOpen={setIsRunModalOpen}
            setRunStrategyData={setRunStrategyData}
            setShowRefresh={setShowRefresh}
          />
        )}
      </Row>
    </div>
  );
};

export default BacktestingContainer;
