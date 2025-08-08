import { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { totalCartAmountPlain, vatCalculator } from '../utils/selectors';

export const useAppData = () => {
	const [toggleMenuState, setToggleMenuState] = useState(false);
	const [categoryState, setCategoryState] = useState([]);
	const [cart, setCart] = useState([]);
	const [cartStorage, setCartStorage] = useState([]);
	const [alert, setAlert] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isPayOpen, setIsPayOpen] = useState(false);
	const [payment, setPayment] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('/database/data.json');
				setCategoryState(res.data);
			} catch (error) {
				console.error(error);
			}
		};

		const savedCart = JSON.parse(localStorage.getItem('soundSavvyCart')) || [];
		setCartStorage(savedCart);
		setCart(savedCart);
		fetchData();
	}, []);

	useEffect(() => {
		if (alert) {
			const timer = setTimeout(() => setAlert(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [alert]);

	const totalAmount = useMemo(() => {
		const { normalVat, shippingFee } = vatCalculator(cart);
		return (totalCartAmountPlain(cart) + shippingFee + normalVat) * 100;
	}, [cart]);

	const toggleMenu = useCallback(() => setToggleMenuState((prev) => !prev), []);
	const toggleCartDisplay = useCallback(
		() => setIsCartOpen((prev) => !prev),
		[]
	);

	const togglePayOpen = useCallback(() => {
		setIsPayOpen((prev) => !prev);
		const fetchPayment = async () => {
			try {
				const res = await axios.get(
					`/.netlify/functions/stripe?total=${totalAmount}`,
					{ headers: { 'Content-Type': 'application/json' } }
				);
				setPayment(res.data.params);
			} catch (err) {
				console.error(err);
			}
		};
		fetchPayment();
	}, [totalAmount]);

	const handleCart = useCallback(
		(newCart, quantity) => {
			console.log('Adding to cart:', newCart, quantity);
			const updatedCart = [...cartStorage];
			const index = updatedCart.findIndex((item) => item.id === newCart.id);

			if (index === -1) {
				updatedCart.push({
					...newCart,
					quantity,
					total: newCart.price * quantity,
				});
			} else {
				updatedCart[index] = {
					...updatedCart[index],
					quantity,
					total: newCart.price * quantity,
				};
			}

			localStorage.setItem('soundSavvyCart', JSON.stringify(updatedCart));
			setCartStorage(updatedCart);
			setCart(updatedCart);
			toggleCartDisplay();
		},
		[cartStorage, toggleCartDisplay]
	);

	const clearStorage = () => {
		localStorage.removeItem('soundSavvyCart');
		setCart([]);
		toggleCartDisplay();
	};

	return {
		toggleMenuState,
		toggleMenu,
		categoryState,
		cart,
		alert,
		setAlert,
		isCartOpen,
		toggleCartDisplay,
		handleCart,
		clearStorage,
		payment,
		isPayOpen,
		togglePayOpen,
		setCart,
	};
};
