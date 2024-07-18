import { blendsMock } from "@/common/mock";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getPortfolioListdata } from "@/redux/slices/porfolioSlice";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Flex,
  Form,
  FormProps,
  Input,
  List,
  Pagination,
  Row,
  Space,
  Steps,
  Tooltip,
  Typography
} from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const { Title, Text, Paragraph } = Typography;

type Props = {};

const PortfolioListContainer = (props: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { portfolioList, status } = useAppSelector(
    (state) => state.porfolioSlice
  );
  const loading = status === "loading";

  const onPageChange = () => {};

  const listItem = (data: any) => (
    <Row style={{ width: "100%" }} gutter={[0, 8]}>
      <Col span={7}>
        <Title level={4} style={{ marginBottom: 0 }}>
          {data?.title}
        </Title>
        <Text italic disabled>
          {data?.id}
        </Text>
        <Paragraph>{data?.description}</Paragraph>
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
        {/* <Tag color={getColorByStatus(data?.status)}>{data?.status}</Tag> */}
        {/* <Paragraph>{moment(data?.time).format("dd/mm/yy")}</Paragraph> */}
      </Col>
      <Col span={1}>
        <Space direction="vertical">
          <Tooltip title="Play">
            <Button
            // icon={<PlayCircleOutlined />}
            // onClick={() => {
            //   setRunStrategyData(data);
            //   setIsRunModalOpen(true);
            // }}
            >
              View
            </Button>
          </Tooltip>
          <Tooltip title="Play">
            <Button
            // icon={<PlayCircleOutlined />}
            // onClick={() => {
            //   setRunStrategyData(data);
            //   setIsRunModalOpen(true);
            // }}
            >
              Edit
            </Button>
          </Tooltip>
        </Space>
      </Col>
      {/* <Col span={24}>
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
                  ),
                },
              ]}
              dataSource={historyData?.data || []}
              scroll={{ x: 300 }}
            />
          </Panel>
        </Collapse>
      </Col> */}
    </Row>
  );

  useEffect(() => {
    dispatch(getPortfolioListdata({}));
  }, [dispatch]);

  return (
    <div className="m-5">
      <Row gutter={8}>
        <Col span={4}>
          {/* <BacktestingFilter
            data={filterElement}
            loading={loading}
            filterData={filterData}
            onFilter={onFilter}
            applyFilter={applyFilter}
          /> */}
        </Col>
        <Col span={20}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Flex justify="flex-end" gap={8}>
                <Button
                  onClick={() => router.push("portfolio-creator/create")}
                  // icon={<PlusOutlined />}
                >
                  Add
                </Button>
              </Flex>
            </Col>
            <Col span={24}>
              <Card size="small">
                <List
                  loading={loading}
                  size="small"
                  dataSource={portfolioList}
                  renderItem={(item) => <List.Item>{listItem(item)}</List.Item>}
                  // loading={loading}
                />
              </Card>
              <Flex justify="flex-end" style={{ marginTop: 10 }}>
                <Pagination
                  current={currentPage}
                  onChange={onPageChange}
                  // total={strategiesList?.total}
                  pageSize={10}
                  showSizeChanger
                  // onShowSizeChange={(_, next) => setPageSize(next)}
                  // hideOnSinglePage
                />
              </Flex>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PortfolioListContainer;
