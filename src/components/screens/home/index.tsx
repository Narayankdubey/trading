import { Col, Row, Space } from 'antd';
import React, { FC } from 'react'
import { Dof, LeftOptions, RightOptions, ShareChart, ShareList } from './components';

interface homeContainerProps {

}

const HomeContainer: FC<homeContainerProps> = ({ }) => {
    return (
        <Row gutter={8} style={{ padding: 10 }}>
            <Col span={1}>
                <LeftOptions/>
            </Col>
            <Col span={17}>
                <ShareChart />
            </Col>
            <Col span={6}>
                <Row gutter={8}>
                    <Col span={20}>
                        <ShareList />
                    </Col>
                    <Col span={4}>
                        <RightOptions/>
                    </Col>
                </Row>
                <Dof/>
            </Col>
        </Row>
    )
}

export default HomeContainer;