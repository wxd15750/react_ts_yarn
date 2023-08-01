import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function Contents() {
  return (
    <Content
      style={{
        minHeight: 280,
      }}
    >
      <Outlet></Outlet>
    </Content>
  );
}
