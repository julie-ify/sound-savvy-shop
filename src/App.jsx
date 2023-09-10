import './App.scss';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import ProductDetails from './components/ProductDetails';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import data from './database/data.json';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import Notice from './components/Notice';

function App() {
	const [toggleMenuState, setToggleMenuState] = useState(false);
	const [categoryState, setCategoryState] = useState([]);

	const toggleMenu = () => {
		setToggleMenuState(!toggleMenuState);
		// console.log(!toggleMenuState);
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

		fetchData();
	}, []);

	return (
		<div className="App">
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
						/>
					}
				/>
				<Route path="*" element={<Notice />} />
			</Routes>
		</div>
	);
}

export default App;
