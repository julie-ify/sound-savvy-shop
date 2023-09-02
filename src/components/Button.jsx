import React from 'react';
import '../styles/Button.scss';
import { Link } from 'react-router-dom';

function Button({ label, color, route }) {
	return (
		<button className={`Btn ${color ? color : 'transparent'}`}>
			<Link to={`/${route ? route : ''}`}>{label}</Link>
		</button>
	);
}

export default Button;
