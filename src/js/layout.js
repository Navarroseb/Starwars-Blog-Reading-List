import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./views/Characters";
import { Charactersdetails } from "./views/Charactersdetails";
import { Planets } from "./views/Planets";
import { Planetsdetails} from "./views/Planetsdetails";
import injectContext from "./store/appContext";



const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<>
			<BrowserRouter basename={basename}>
				<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Characters">
							<Characters />
						</Route>
						<Route exact path="/Charactersdetails">
							<Charactersdetails />
						</Route>
						 <Route exact path="/Planets">
							<Planets />
						</Route>
						<Route exact path="/Planetsdetails">
							<Planetsdetails />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
