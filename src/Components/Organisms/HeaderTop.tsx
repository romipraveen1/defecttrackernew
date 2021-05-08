import React, { useState } from "react";
import Profile from "../../assets/profile.jpg";
import { Col, Divider, Layout, Menu, Row } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import CustomAvatar from "../Atoms/Avatar/CustomAvatar";
import { FlexContainer } from "../StyledComponents/FlexBox/FlexContainer";
import Flex from "../StyledComponents/FlexBox/Flex";

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
          <Flex steps flex="end" center>
            <div style={{}}>
              <BellOutlined
                style={{
                  fontSize: "20px",
                  marginRight: "30px",
                  color: "#13B2CF",
                }}
              />
              <CustomAvatar src={Profile} />
            </div>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default HeaderTop;
