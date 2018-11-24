import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { NavLink, withRouter } from "react-router-dom";
class MyMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <NavLink to="/home">HomePage</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/aboutme">AboutMePage</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MyMenu;
