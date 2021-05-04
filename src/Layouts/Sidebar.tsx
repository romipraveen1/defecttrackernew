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

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const Home = () => {
  const [collapsed, setCollapsed] = useState({ collapsed: false });

  const toggle = () => {
    setCollapsed({
      collapsed: !collapsed.collapsed,
    });
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed.collapsed}>
        <div className="logo" style={{}} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["3"]}
          defaultOpenKeys={["sub1"]}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
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
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">ADD DEFECT</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
          </SubMenu>

          <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout>
        <Header className="\" style={{ padding: 0, backgroundColor: "#fff" }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        ></Content>
      </Layout>
    </Layout>
  );
};

export default Home;
