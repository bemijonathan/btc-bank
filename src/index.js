import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import Home from "./views/Home";
import PageNotFound from "./views/PageNotFound";
import Comingsoon from "views/Comingsoon";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "assets/css/custom.css";

const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path="/" component={Comingsoon} />
			<Route path="/home" component={Home} />
			<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
			<Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
			<Route path="*" exact={true} component={PageNotFound} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
