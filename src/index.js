import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
