import './App.scss';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import ProductDetails from './components/pages/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import Notice from './components/Notice';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import CheckoutForm from './components/stripe/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { appearance } from './utils/selectors';
import PaymentStatus from './components/stripe/PaymentStatus';
import { useAppData } from './hooks/useAppData';
import AuthScrollToTop from './components/AuthScrollToTop';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function App() {
	const {
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
	} = useAppData();

	const options = {
		clientSecret: payment && payment.client_secret,
		appearance: appearance,
	};

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
			{payment && (
				<Elements stripe={stripePromise} options={options}>
					<CheckoutForm isPayOpen={isPayOpen} togglePayOpen={togglePayOpen} />
				</Elements>
			)}
			<ScrollToTop smooth color="#d87d4a" className="Scroll-top" />
			<AuthScrollToTop />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							toggleMenu={toggleMenu}
							toggleMenuState={toggleMenuState}
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
							togglePayOpen={togglePayOpen}
						/>
					}
				/>
				<Route
					path={'/pay/status'}
					element={
						<Elements stripe={stripePromise}>
							<PaymentStatus cart={cart} setCart={setCart} />
						</Elements>
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
