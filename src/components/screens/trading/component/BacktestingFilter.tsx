import { Button, Card, Checkbox, Input, Row, Space, Typography } from "antd";
import React, { FC } from "react";
import { Collapse } from "antd";
import { Loader } from "@/components/elements";
import { backtestingConstant } from "@/common/constants";

const { Panel } = Collapse;
const { Title } = Typography;

const filterElements = backtestingConstant.filterElements;

interface BacktestingFilterProps {
  data: any;
  loading: boolean;
  filterData: any;
  onFilter: (key: string, value: any) => void;
  applyFilter: () => void;
}

const BacktestingFilter: FC<BacktestingFilterProps> = ({
  data,
  loading,
  onFilter,
  filterData,
  applyFilter,
}) => {
  const Header = ({ item }: any) => (
    <Typography.Text className={"fontWeight600"}>
      {item?.name?.toUpperCase()}
    </Typography.Text>
  );

  return (
    <Card
      // size="small"
      bodyStyle={{ padding: 0 }}
      bordered={false}
      title="Filter"
      extra={
        <Button type="primary" onClick={applyFilter}>
          Apply
        </Button>
      }
      // loading={loading}
    >
      <Space
        direction="vertical"
        style={{
          width: "100%",
          maxHeight: "calc(100vh - 74px)",
          overflow: "auto",
        }}
      >
        <Input
          placeholder="Search"
          allowClear
          onChange={({ target }) => onFilter("title", target.value)}
          value={filterData?.title || ''}
        />
        <Collapse
          bordered={false}
          defaultActiveKey={filterElements?.map((elem: any) => elem?.name)}
          expandIconPosition={"end"}
        >
          {filterElements &&
            filterElements.map((item: any) => (
              <Panel header={<Header item={item} />} key={item?.name}>
                {item?.options &&
                  item?.options?.map((option: any) => (
                    <Row key={option}>
                      <Checkbox
                        value={option}
                        onChange={({ target }) =>
                          onFilter(item?.name?.toLowerCase(), target.value)
                        }
                      >
                        {option}
                      </Checkbox>
                    </Row>
                  ))}
              </Panel>
            ))}
        </Collapse>
      </Space>
    </Card>
  );
};

export default BacktestingFilter;
