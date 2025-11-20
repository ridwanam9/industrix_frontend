import { Layout } from "antd";
import Navbar from "./Navbar";

const { Content } = Layout;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />

      <Content
        style={{
          padding: "20px 10px",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: 12,
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
}
