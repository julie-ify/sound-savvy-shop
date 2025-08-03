import Header from '../layouts/Header';
import Middle from '../layouts/Middle';
import Footer from '../layouts/Footer';
import Menu from '../layouts/Menu';

function Home({
	toggleMenu,
	toggleMenuState,
	categoryState,
	isCartOpen,
	toggleCartDisplay,
	cart,
}) {
	return (
		<div className="Home-container">
			<Header
				toggleMenu={toggleMenu}
				toggleMenuState={toggleMenuState}
				isCartOpen={isCartOpen}
				toggleCartDisplay={toggleCartDisplay}
				cart={cart}
			/>
			<Middle categoryState={categoryState} toggleMenu={toggleMenu} />
			<Footer />
			<Menu
				toggleMenuState={toggleMenuState}
				categoryState={categoryState}
				toggleMenu={toggleMenu}
			/>
		</div>
	);
}

export default Home;
