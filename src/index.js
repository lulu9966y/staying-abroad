import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Jinnang from "./jinnang";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Gonglve from "./gonglve";
import Map from "./map";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/jinnang" component={Jinnang} />
      <Route path="/gonglve" component={Gonglve} />
      <Route path="/map" component={Map} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
