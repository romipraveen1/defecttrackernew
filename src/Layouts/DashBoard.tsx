import React, { useState } from "react";
import { Layout } from "antd";

import SideMenu from "../Components/Organisms/SideMenu";
import HeaderTop from "../Components/Organisms/HeaderTop";

const { Header, Sider, Content, Footer } = Layout;

const DashBoard = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SideMenu />
        </Sider>

        <Layout>
          <Header className="\" style={{ padding: 0, backgroundColor: "#fff" }}>
            <HeaderTop collapsed={collapsed} setCollapsed toggle={toggle} />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DashBoard;
