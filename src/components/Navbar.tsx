import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default function Navbar() {
  const location = useLocation();

  const items = [
    { key: "/", label: <Link to="/">Todos</Link> },
    { key: "/categories", label: <Link to="/categories">Categories</Link> },
  ];

  return (
    <Header style={{ background: "#fff", padding: "0 40px" }}>
      <div style={{ float: "left", fontSize: 20, fontWeight: 600, marginRight: 40 }}>
        Industrix Todo
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        style={{ borderBottom: "none" }}
      />
    </Header>
  );
}
