import { Button, Card, Col, Radio, Row, Space, Table, Typography } from 'antd';
import React, { FC } from 'react'
import TradingFilter from './component/TradingFilter';

interface TradingProps {

}

const TradingContainer: FC<TradingProps> = ({ }) => {
    const tradingTabs = [
        { title: "ORDERS" },
        { title: "POSITIONS" },
        { title: "HOLDINGS" },
    ]
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <Row gutter={8}>
            <Col span={4}>
                <Space direction="vertical" style={{width:"100%"}}>
                    <Card size='small'>Filter</Card>
                    <TradingFilter />
                </Space>
            </Col>
            <Col span={20}>
                <Row gutter={[8, 8]}>
                    <Col xs={24} sm={8} md={6} lg={4}>
                        <Card size='small'>
                            <Typography.Title level={3}>Trading Tab</Typography.Title>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Space wrap>
                            <Radio.Group defaultValue="ORDERS" buttonStyle="solid">
                                {tradingTabs.map((item, index) => (
                                    <Radio.Button key={item?.title} value={item?.title}>{item?.title}</Radio.Button>
                                ))}
                            </Radio.Group>
                        </Space>
                    </Col>
                    <Col span={24}>
                        <Table dataSource={dataSource} columns={columns} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default TradingContainer;