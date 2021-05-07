import React, { useState } from "react";
import { Col, Divider, Layout, Menu, Row } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import CustomAvatar from "../Atoms/Avatar/CustomAvatar";

const HeaderTop = (props: any) => {
  const { collapsed, toggle } = props;

  return (
    <>
      <Row style={{ paddingLeft: " 25px", paddingRight: "25px" }} justify="end">
        <Col span={12}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Col>
        <Col span={12}>
          <BellOutlined />
          <CustomAvatar />
        </Col>
      </Row>
    </>
  );
};

export default HeaderTop;
