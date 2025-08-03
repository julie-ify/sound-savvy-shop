import '../styles/Button.scss';
import { useNavigate } from 'react-router-dom';

function Button({ label, color, route, fromCart }) {
	const navigate = useNavigate();

	const page = route ? `/${route}` : '/';

	return (
		<button
			className={`Btn ${color ? color : 'transparent'} ${
				fromCart ? 'wider' : ''
			}`}
			onClick={() => navigate(page)}
		>
			{label}
		</button>
	);
}

export default Button;
