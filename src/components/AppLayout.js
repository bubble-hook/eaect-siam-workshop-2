import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import MyMenu from "./MyMenu";

const { Header, Content, Footer } = Layout;

export default class AppLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <MyMenu />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
           Footer 
        </Footer>
      </Layout>
    );
  }
}
