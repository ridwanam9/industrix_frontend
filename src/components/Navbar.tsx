import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header } = Layout;

export default function Navbar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  const items = [
    { key: "/", label: <Link to="/">Todos</Link> },
    { key: "/categories", label: <Link to="/categories">Categories</Link> },
  ];

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: 20, fontWeight: 600 }}>
        Industrix Todo
      </div>

      {/* Desktop Menu */}
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        style={{
          borderBottom: "none",
          display: window.innerWidth < 600 ? "none" : "block",
        }}
      />

      {/* Mobile Menu Button */}
      <MenuOutlined
        className="mobile-menu-toggle"
        style={{ fontSize: 22, cursor: "pointer", display: window.innerWidth < 600 ? "block" : "none" }}
        onClick={() => setCollapsed((c) => !c)}
      />

      {/* Mobile Dropdown */}
      {!collapsed && window.innerWidth < 600 && (
        <Menu
          mode="vertical"
          items={items}
          selectedKeys={[location.pathname]}
          style={{
            position: "absolute",
            top: 64,
            right: 0,
            width: "100%",
            borderTop: "1px solid #eee",
          }}
        />
      )}
    </Header>
  );
}
