import React, { useState } from "react";
import { Col, Layout, Menu, Row } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const HeaderTop = (props: any) => {
  const { collapsed, toggle } = props;
  // const toggle = () => {
  //   setCollapsed({
  //     collapsed: !collapsed.collapsed,
  //   });
  // };
  return (
    <>
      <Row>
        <Col span={12}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Col>
        <Col span={12}>{/* <BellOutlined /> */}</Col>
      </Row>
    </>
  );
};

export default HeaderTop;
