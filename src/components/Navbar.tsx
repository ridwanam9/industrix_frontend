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
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Brand Title */}
      <div
        style={{
          fontSize: 20,
          fontWeight: 600,
          whiteSpace: "nowrap",      // <-- penting!
          marginRight: 24,
        }}
      >
        Industrix Todo
      </div>

      {/* Menu */}
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        overflowedIndicator={null}   // <-- mencegah menu ...
        style={{
          flex: 1,
          justifyContent: "flex-end",
          minWidth: 0,               // <-- FIX RESPONSIVE
        }}
      />
    </Header>
  );
}
