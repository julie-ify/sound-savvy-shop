import React from 'react';
import '../styles/Button.scss'

function Button({ label, color }) {
	return <button className={`Btn ${color}`}>{label}</button>;
}

export default Button;
