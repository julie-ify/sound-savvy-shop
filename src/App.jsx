/* eslint-disable react-hooks/exhaustive-deps */

import './App.scss';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import ProductDetails from './components/pages/ProductDetails';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import Notice from './components/Notice';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';

function App() {
	const [toggleMenuState, setToggleMenuState] = useState(false);
	const [categoryState, setCategoryState] = useState([]);
	const [cart, setCart] = useState([]);
	const [alert, setAlert] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const cartStorage = JSON.parse(localStorage.getItem('soundSavvyCart')) || [];

	if (alert) {
		setTimeout(() => {
			setAlert(false);
		}, 5000);
	}

	const toggleMenu = () => {
		setToggleMenuState(!toggleMenuState);
	};

	const toggleCartDisplay = () => {
		setIsCartOpen(!isCartOpen);
	};

	const handleCart = (newCart, quantity) => {
		const productIds = cartStorage.map((item) => {
			return item.id;
		});

		if (!productIds.includes(newCart.id)) {
			const totalAmount = newCart.price * quantity;
			cartStorage.push({ ...newCart, quantity: quantity, total: totalAmount });
			localStorage.setItem('soundSavvyCart', JSON.stringify(cartStorage));
			setCart([...cartStorage]);
			toggleCartDisplay();
		} else {
			const newcartStorage = cartStorage.map((item) => {
				if (item.id === newCart.id) {
					const totalAmount = item.price * item.quantity;
					return {
						...item,
						quantity: quantity,
						total: totalAmount,
					};
				} else {
					return item;
				}
			});
			localStorage.setItem('soundSavvyCart', JSON.stringify(newcartStorage));
			setCart([...cartStorage]);
			toggleCartDisplay();
		}
	};

	const clearStorage = () => {
		localStorage.removeItem('soundSavvyCart');
		setCart([]);
		toggleCartDisplay();
		return;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('/database/data.json');
				setCategoryState([...response.data]);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		setCart([...cartStorage]);
		fetchData();
	}, []);

	return (
		<div className="App">
			<Cart
				cart={cart}
				clearStorage={clearStorage}
				setAlert={setAlert}
				isCartOpen={isCartOpen}
				toggleCartDisplay={toggleCartDisplay}
				setCart={setCart}
			/>
			<ScrollToTop smooth color="#d87d4a" className='Scroll-top' />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							toggleMenu={toggleMenu}
							toggleMenuState={toggleMenuState}
							setToggleMenuState={setToggleMenuState}
							categoryState={categoryState}
							cart={cart}
							handleCart={handleCart}
							clearStorage={clearStorage}
							isCartOpen={isCartOpen}
							toggleCartDisplay={toggleCartDisplay}
						/>
					}
				/>
				<Route
					path="/categories/:category"
					element={
						<Category
							categoryState={categoryState}
							toggleMenu={toggleMenu}
							toggleMenuState={toggleMenuState}
							cart={cart}
							handleCart={handleCart}
							clearStorage={clearStorage}
							isCartOpen={isCartOpen}
							toggleCartDisplay={toggleCartDisplay}
						/>
					}
				/>
				<Route
					path="/categories/:category/:product"
					element={
						<ProductDetails
							toggleMenu={toggleMenu}
							toggleMenuState={toggleMenuState}
							categoryState={categoryState}
							cart={cart}
							handleCart={handleCart}
							clearStorage={clearStorage}
							alert={alert}
							setAlert={setAlert}
							isCartOpen={isCartOpen}
							toggleCartDisplay={toggleCartDisplay}
						/>
					}
				/>
				<Route
					path="/checkout"
					element={
						<Checkout
							alert={alert}
							toggleMenu={toggleMenu}
							isCartOpen={isCartOpen}
							toggleCartDisplay={toggleCartDisplay}
							cart={cart}
						/>
					}
				/>
				<Route
					path="*"
					element={<Notice message={"Opps! The page doesn't exist"} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
