import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Page404 from "./components/page404/Page404";
import React from "react";

const Routes = () =>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/car/:id" component={Detail} />
    <Route component={Page404} />
</Switch>;

export default Routes;
