import React from "react";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Join from "./components/SignIn/SignIn";
import Chat from "./components/Chat/Chat";

const App = () => {
	let routes = useRoutes([
		{ path: "/", element: <Join /> },
		{ path: "/chat", element: <Chat /> },
	]);
	return routes;
};

const AppWrapper = () => {
	return (
		<Router>
			<App />
		</Router>
	);
};

export default AppWrapper;
