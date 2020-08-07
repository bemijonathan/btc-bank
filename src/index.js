import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import SignUp from "./views/Signup";
import Signin from "./views/Signin";
import AdminLayout from "layouts/Admin/Admin.js";
import Home from "./views/Home";
import PageNotFound from "./views/PageNotFound";
import Comingsoon from "views/Comingsoon";
import About from "views/About";
import Contact from "views/Contact";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "assets/css/custom.css";
import Store from "./store";
import { Provider } from "react-redux";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={Comingsoon} />
        <Route path="/home" component={Home} history={hist} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={Signin} />
        <Route
          path="/dashboard"
          render={(props) => <AdminLayout {...props} />}
        />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
