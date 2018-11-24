import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import AppLayout from "./components/AppLayout";

export default (
  <Switch>
    <AppLayout>
      <Route path="/home" component={HomePage} />
      <Route path="/aboutme" component={AboutMePage} />
    </AppLayout>
  </Switch>
);
