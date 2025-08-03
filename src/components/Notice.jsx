import '../styles/Notice.scss';

function Notice({ message }) {
	return (
		<div className="Notice">
			<div className="Notice-container">
				<div className="Notice-wrapper Notice-message">
					<h1>{message}</h1>
					<a href="/" className="Notice-link">
						Back to home
					</a>
				</div>
			</div>
		</div>
	);
}

export default Notice;
