import React from 'react';
import '../styles/Button.scss';

function Button({ label, color, route, fromCart }) {
	const navigationPage = (page) => {
		window.location.href = page ? `/${page}` : '/';
	};

	return (
		<button
			className={`Btn ${color ? color : 'transparent'} ${
				fromCart ? 'wider' : ''
			}`}
			onClick={() => navigationPage(route)}
		>
			{label}
		</button>
	);
}

export default Button;
