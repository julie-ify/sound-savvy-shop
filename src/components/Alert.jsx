import React from 'react';
import '../styles/Alert.scss';

function Alert({ alert, message }) {
	return (
		<div className={`Alert-container ${alert ? 'Alert-visibility' : ''}`}>
			<div className="Alert-wrapper">
				<div>{message}</div>
			</div>
		</div>
	);
}

export default Alert;
