import React, { Component } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Menu from "./components/MyMenu";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import MyMenu from "./components/MyMenu";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BrowserRouter children={routes} />
      </BrowserRouter>
    );
  }
}

export default App;
