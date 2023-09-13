import './App.scss';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import ProductDetails from './components/pages/ProductDetails';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import data from './database/data.json';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import Notice from './components/Notice';
import Cart from './components/pages/Cart';

function App() {
	const [toggleMenuState, setToggleMenuState] = useState(false);
	const [categoryState, setCategoryState] = useState([]);
	const [cart, setCart] = useState([]);
	const [alert, setAlert] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const cartStorage = JSON.parse(localStorage.getItem('soundSavvyCart')) || [];

	if (alert) {
		setTimeout(() => {
			setAlert(false);
		}, 5000);
	}

	console.log(cartStorage);

	const toggleMenu = () => {
		setToggleMenuState(!toggleMenuState);
	};

	const toggleCartDisplay = () => {
		setIsCartOpen(!isCartOpen);
	};

	const handleCart = (newCart) => {
		const productIds = cartStorage.map((item) => {
			return item.id;
		});

		if (!productIds.includes(newCart.id)) {
			cartStorage.push(newCart);
			localStorage.setItem('soundSavvyCart', JSON.stringify(cartStorage));
			setCart([...cartStorage]);
			toggleCartDisplay();
		} else {
			setCart([...cartStorage]);
			toggleCartDisplay();
		}
	};

	const clearStorage = () => {
		localStorage.removeItem('soundSavvyCart');
		setCart([]);
		toggleCartDisplay()
		return;
	};
	// console.log(categoryState);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('/database/data.json');
				setCategoryState([...response.data]);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		setCart([...cartStorage])
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
			/>
			<ScrollToTop smooth color="#d87d4a" />
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
					path="*"
					element={<Notice message={"Opps! The page doesn't exist"} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
