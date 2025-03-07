import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
const { Header, Sider, Content } = Layout;

export const MainLayout = () => {
  const Token = Cookies.get("accessToken");
  if (!Token) {
    return <Navigate replace to={"/"} />;
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ width: "100vw", height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/app/home"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to={"/app/home"}>Asosiy sahifa</Link>,
            },
            {
              key: "2",
              icon: <TeamOutlined />,
              label: <Link to={"/app/debtors"}>Mijozlar</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: (
                <Link to={"/app/product"}>Nasiya yaratish & qo'shish</Link>
              ),
            },
            {
              key: "4",
              icon: <BarChartOutlined />,
              label: <Link to={"/app/report"}>Hisobot</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
