import { useState } from 'react';
import '../styles/CartButton.scss';

function CartQuantity({ lineItem, setCart }) {
	const [quantity, setQuantity] = useState(lineItem.quantity);

	const updateCartStorage = (productId, newQuantity) => {
		const cartStorage =
			JSON.parse(localStorage.getItem('soundSavvyCart')) || [];

		const updatedStorage = cartStorage.map((item) =>
			item.id === productId
				? {
						...item,
						quantity: newQuantity,
						total: item.price * newQuantity,
				  }
				: item
		);

		localStorage.setItem('soundSavvyCart', JSON.stringify(updatedStorage));
		setCart(updatedStorage);
	};

	const handleIncrement = () => {
		setQuantity((prev) => {
			const newQuantity = prev + 1;
			updateCartStorage(lineItem.id, newQuantity);
			return newQuantity;
		});
	};

	const handleDecrement = () => {
		setQuantity((prev) => {
			if (prev <= 1) return prev;
			const newQuantity = prev - 1;
			updateCartStorage(lineItem.id, newQuantity);
			return newQuantity;
		});
	};

	return (
		<div className="CartButton-main-grid">
			<div className="CartButton-btn-grid smaller">
				<button onClick={handleDecrement}>-</button>
				<span className="Currency-text">{quantity}</span>
				<button onClick={handleIncrement}>+</button>
			</div>
		</div>
	);
}

export default CartQuantity;
