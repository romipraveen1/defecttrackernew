import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  TeamOutlined,
  UserOutlined,
  FileOutlined,
  DesktopOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const HeaderTop = (props: any) => {
  const { collapsed, toggle } = props;
  // const toggle = () => {
  //   setCollapsed({
  //     collapsed: !collapsed.collapsed,
  //   });
  // };
  return (
    <>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })}
    </>
  );
};

export default HeaderTop;
