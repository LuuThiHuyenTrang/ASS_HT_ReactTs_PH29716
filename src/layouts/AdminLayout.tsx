import { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { AiFillBank } from "react-icons/ai";
import { BiLogoProductHunt } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState(null); // Sử dụng null thay vì {}

  // useEffect(() => {
  //   const data: any = localStorage.getItem("user");
  //   const parsedData = JSON.parse(data);

  //   if (parsedData && parsedData.role === "admin") {
  //     alert("Hello Admin " + parsedData.name);
  //     setUser(parsedData);
  //   } else {
  //     message.error("Mời bạn đăng nhập tài khoản admin");
  //     navigate("/signin");
  //   }
  // }, [navigate]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AiFillBank />,
              label: <Link to={`/`}>Home</Link>,
            },
            {
              key: "2",
              icon: <BiLogoProductHunt />,
              label: <Link to={`/admin/product/`}>Products</Link>,
            },
            {
              key: "3",
              icon: <MdCategory />,
              label: <Link to={`/admin/category/`}>Categories</Link>,
            },
            {
              key: "4",
              icon: <FaUserCog />,
              label: <Link to={`/admin/auth/`}>Users</Link>,
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
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
