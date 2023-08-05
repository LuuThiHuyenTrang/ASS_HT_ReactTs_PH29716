import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiAdminLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;

interface IProps {
  logout: () => void;
}
const WebsiteLayout = (props: IProps) => {
  const [user, setUser] = useState<null>(null);

  useEffect(() => {
    const data: any = localStorage.getItem("user");
    const parsedData = JSON.parse(data);
    setUser(parsedData);

    if (parsedData != null) {
      alert("Hello, my friend, " + parsedData.name);
    }
  }, [props]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <FcHome />,
              label: <Link to={`/`}>Home</Link>,
            },
            {
              key: "2",
              icon: <FaSignInAlt />,
              label: <Link to={`/signin/`}>Sign In</Link>,
            },
            {
              key: "3",
              icon: <SiGnuprivacyguard />,
              label: <Link to={`/signup/`}>Sign Up</Link>,
            },
            {
              key: "5",
              label: <Button onClick={() => props.logout()}>Log out</Button>,
            },
            {
              key: "4",
              icon: <RiAdminLine />,
              label: <Link to={`/admin/product/`}>Admin</Link>,
            },
          ]}
        />
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        LuuThiHuyenTrang - PH29716
      </Footer>
    </Layout>
  );
};

export default WebsiteLayout;
