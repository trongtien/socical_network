import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const NoMatch: React.FunctionComponent = () => {
	let history = useHistory();

	const goToPreviousPath = () => {
		history.goBack();
	}

	return (
		<div>
			<h1>404 - Not Found!</h1>
			<button onClick={goToPreviousPath} >
				Go to previous
			</button>

			<Link to="/">
				Go Home
			</Link>
		</div>)
}

export default NoMatch;
