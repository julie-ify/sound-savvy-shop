import React, { useState } from 'react';
import '../styles/CartButton.scss';
// import Button from './Button';

function CartButton({ color, addToCart, label, isBtn, item}) {
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
					type="text"
					min={1}
					value={quantity}
					onChange={(e) =>
						setQuantity(
							parseInt(e.target.value.trim() ? e.target.value.trim() : 0)
						)
					}
				/>
				<button onClick={handleIncrement}>+</button>
			</div>
			{/* <div className={`${!isBtn ? 'Btn-visibility' : ''}`}> */}
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
