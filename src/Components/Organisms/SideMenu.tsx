import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { TeamOutlined, UserOutlined, DesktopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
      style={{ height: "100vh" }}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["3"]}
      defaultOpenKeys={["sub1"]}
    >
      <SubMenu key="sub1" icon={<UserOutlined />} title="Dashboard">
        <Menu.Item key="1">
          <Link to="/company">Company</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/defect">Defect</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/developer">Developer</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/manager">Project Manager</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/qa">QA</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideMenu;
