import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import PropTypes from "prop-types";

const Search = ({ showAlert, showClear, clearUsers }) => {
	const githubContext = useContext(GithubContext);
	const [text, setText] = useState("");

	const onChange = e => {
		setText(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (text === "") {
			showAlert("Please enter a username...", "light");
		} else {
			githubContext.searchUsers(text);
			setText("");
		}
	};

	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<input
					type="text"
					onChange={onChange}
					name="text"
					placeholder="Search Users..."
					value={text}
				/>
				<input type="submit" value="Search" className="btn btn-dark btn-block" />
			</form>
			{showClear && (
				<button className="btn btn-light btn-block" onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};
Search.propTypes = {
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	showAlert: PropTypes.func.isRequired,
};

export default Search;
