import React, { useState } from 'react';
import '../styles/CartButton.scss';

function CartButton({ color, addToCart, label, item }) {
	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		setQuantity((prev) => prev + 1);
	};

	const handleDecrement = () => {
		if (quantity === 1) {
			return setQuantity(1);
		}
		setQuantity((prev) => prev - 1);
	};

	return (
		<div className="CartButton-main-grid">
			<div className="CartButton-btn-grid">
				<button onClick={handleDecrement}>-</button>
				<span className='Currency-text'>
					{quantity}
				</span>
				<button onClick={handleIncrement}>+</button>
			</div>
			<div>
				<button
					className={`Btn ${color ? color : 'transparent'}`}
					onClick={() => addToCart(item, quantity)}
				>
					{label}
				</button>
			</div>
		</div>
	);
}

export default CartButton;
