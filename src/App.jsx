import './App.scss';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import ProductDetails from './components/ProductDetails';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import data from './database/data.json';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';

function App() {
	const [toggleMenuState, setToggleMenuState] = useState(false);
	const [categoryState, setCategoryState] = useState([]);
	const [thumbnail, setThumbnail] = useState([]);

	const toggleMenu = () => {
		setToggleMenuState(!toggleMenuState);
		// console.log(!toggleMenuState);
	};

	// console.log(categoryState);

	useEffect(() => {
		const fetchData = async () => {
			const categoryData = axios.get('/database/data.json');
			const thumbnailData = axios.get('/database/category.json');
			try {
				const response = await Promise.all([categoryData, thumbnailData]);
				setCategoryState([...response[0].data]);
				setThumbnail([...response[1].data]);
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
							thumbnail={thumbnail}
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
							thumbnail={thumbnail}
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
							thumbnail={thumbnail}
							toggleMenu={toggleMenu}
							toggleMenuState={toggleMenuState}
							categoryState={categoryState}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
