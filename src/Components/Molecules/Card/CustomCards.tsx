import React from "react";
import { Card, Col } from "antd";
const { Meta, Grid } = Card;

let roud = {
  borderRadius: "10px",
};

const CustomCard = (props: any) => {
  const {
    name,
    span,
    actions,
    activeTabKey,
    bodyStyle,
    bordered,
    cover,
    defaultActiveTabKey,
    extra,
    size,
    onTabChange,
    tabList,
    type,
  } = props;
  console.log(name);
  return (
    <Col span={span}>
      <Card
        actions={actions}
        activeTabKey={activeTabKey}
        bodyStyle={bodyStyle}
        bordered={bordered}
        cover={cover}
        defaultActiveTabKey={defaultActiveTabKey}
        extra={extra}
        size={size}
        onTabChange={onTabChange}
        tabList={tabList}
      >
        {props.children}
      </Card>
    </Col>
  );
};

export default CustomCard;
