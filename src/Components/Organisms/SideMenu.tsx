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

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState({ collapsed: false });

  const toggle = () => {
    setCollapsed({
      collapsed: !collapsed.collapsed,
    });
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["3"]}
      defaultOpenKeys={["sub1"]}
    >
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        <Menu.Item key="3">ADD DEFECT</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideMenu;
