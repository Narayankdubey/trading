import { Card, Checkbox, Row } from "antd";
import React, { FC } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

interface TradingFilterProps { }

const TradingFilter: FC<TradingFilterProps> = ({ }) => {
    const filterDummyData = [
        {
            name: "first",
            options: ["1-option1", "1-option2", "1-option3"],
            disabled: false
        },
        {
            name: "second",
            options: ["2-option1", "2-option2", "2-option3"],
            disabled: false
        },
        {
            name: "third",
            options: ["3-option1", "3-option2", "3-option3"],
            disabled: false
        },
        {
            name: "forth",
            options: ["4-option1", "4-option2", "4-option3"],
            disabled: true
        },
    ]
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={filterDummyData?.map((elem)=>elem?.name)}
            expandIconPosition={"end"}
        >
            {filterDummyData.map((item) => (
                <Panel header={item?.name?.toUpperCase()} key={item?.name}>
                    {item?.options && item?.options?.map((option) => (
                        <Row key={option}>
                            <Checkbox value={option}>{option}</Checkbox>
                        </Row>
                    ))}
                </Panel>
            ))}

        </Collapse>
    );
};

export default TradingFilter;
