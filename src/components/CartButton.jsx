import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartButton.scss';
import Button from './Button';

function CartButton({ color, route, label }) {
	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		setQuantity((prev) => prev + 1);
	};

	const handleDecrement = () => {
		setQuantity((prev) => prev - 1);
	};

	return (
		<div className="CartButton-main-grid">
			<div className="CartButton-btn-grid">
				<button onClick={handleDecrement}>-</button>
				<input
					type="number"
					min={1}
					value={quantity}
					onChange={(e) => setQuantity(parseInt(e.target.value))}
				/>
				<button onClick={handleIncrement}>+</button>
			</div>
			<Button
				label={label}
				color={color}
				// route={`categories/${param}/${category.slug}`}
			/>
		</div>
	);
}

export default CartButton;
