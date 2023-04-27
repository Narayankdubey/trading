import { Avatar, Button, Card, Progress, Row, Space, Typography } from 'antd'
import React, { FC } from 'react'

const dummyData = [
    { name: "HDFC", icon: "H", percentange: 20, quantity: 2700 },
    { name: "ICICI", icon: "I", percentange: 10, quantity: 20 },
    { name: "NMDC", icon: "N", percentange: 50, quantity: 500 },
    { name: "TCS", icon: "T", percentange: 20, quantity: 70 },
    { name: "INFOSYS", icon: "I", percentange: 50, quantity: 90 },
    { name: "HDFC LIFE", icon: "H", percentange: 10, quantity: 100 },
]

interface SharesProps {
    name: string;
    icon: string;
    percentage: number;
    quantity: number;
}

export const Shares: FC<SharesProps> = ({ name, icon, percentage, quantity }) => {
    return (
        <div>
            <Row justify={"space-between"}>
                <Space>
                    <Avatar>{icon}</Avatar>
                    <Typography.Text>{name}</Typography.Text>
                </Space>
                <Space>
                    <Typography.Text>{quantity}</Typography.Text>
                </Space>
            </Row>
            <Progress percent={percentage} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }}/>
        </div>
    )
}

interface ShareListProps {

}

export const ShareList: FC<ShareListProps> = ({ }) => {
    return (
        <Card>
            {dummyData.map((item) => (<Shares key={item?.name} name={item?.name} percentage={item?.percentange} icon={item?.icon} quantity={item?.quantity} />))}
            <Button>View More</Button>
        </Card>
    )
}