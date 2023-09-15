import React from 'react';
import '../styles/Button.scss';

function Button({ label, color, route, disable }) {
	const navigationPage = (page) => {
		window.location.href = page ? `/${page}` : '/';
	};

	return (
		<button
			className={`Btn ${color ? color : 'transparent'} wider`}
			onClick={() => navigationPage(route)}
		>
			{label}
		</button>
	);
}

export default Button;
