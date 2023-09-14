import React, { useEffect, useState } from 'react';
import '../styles/CartButton.scss';
// import Button from './Button';

function CartQuantity({ lineItem }) {
	const [quantity, setQuantity] = useState(lineItem.quantity);
	// let a = JSON.parse(localStorage.getItem('soundSavvyCart')) || [];

	// console.log(a.length)
	// let ab = [];
	// if (a.length > 0) {
	// 	let b = a.filter((item, index) => {
	// 		return item.id === lineItem.id;
	// 	});

	// 	ab.push(b[0]);
	// 	// setQuantity(ab[0].quantity)
	// }

	// useEffect(() => {
	// 	if(ab.length > 0) {
	// 		setQuantity(ab[0].quantity)

	// 	}

	// }, [])

	// if(ab[0].quantity)  {

	// }
	// console.log(ab[0].quantity);

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
		</div>
	);
}

export default CartQuantity;
