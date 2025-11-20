import { Layout } from "antd";
import Navbar from "./Navbar";

const { Content } = Layout;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f6fa" }}>
      <Navbar />

      <Content
        style={{
          padding: "30px 20px",
          maxWidth: 1000,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 12,
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
}
