import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
	return (
		<GithubState>
			<Router>
				<div className="App">
					<Navbar />
					<Alert alert={alert} />
					<Switch>
						<Route
							path="/"
							exact
							render={props => (
								<Fragment>
									<Search />
									<Users loading={loading} users={users} />
								</Fragment>
							)}
						/>
						<Route exact path="/about" component={About} />
						<Route
							exact
							path="/user/:login"
							render={props => (
								<User
									{...props}
									getUserRepos={getUserRepos}
									getUser={getUser}
									user={user}
									repos={repos}
									loading={loading}
								/>
							)}
						/>
					</Switch>
					<div className="container" />
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
