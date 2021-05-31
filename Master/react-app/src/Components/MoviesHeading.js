import React from 'react';

const MoviesHeading = (props) => {
	return (
		<div className='col-4'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MoviesHeading;