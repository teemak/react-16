import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
	foo = () => "Bunthy";
	render() {
		const loading = true;
		const name = "Tee Mak";

		if (loading) {
			return <h4>Loading...</h4>;
		}

		return (
			<Fragment className="App">
				<h1>HELLO {name}</h1>
				<h2>React Practice</h2>
				<p>{8 * 8}</p>
				<p>{this.foo()}</p>
			</Fragment>
		);
	}
}

export default App;
