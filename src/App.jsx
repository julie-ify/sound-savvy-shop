import './App.scss';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import data from './database/data.json';

function App() {
	const [toggleMenuState, setToggleMenuState] = useState(false);
	const [categoryState, setCategoryState] = useState([]);

	const toggleMenu = () => {
		setToggleMenuState(!toggleMenuState);
		console.log(!toggleMenuState);
	};

	useEffect(() => {
		setCategoryState([...data]);
	}, []);

	return (
		<div className="App">
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
			</Routes>
		</div>
	);
}

export default App;
