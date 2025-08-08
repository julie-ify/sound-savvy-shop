import '../../styles/Navigation.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navigation({ toggleMenu, toggleMenuState, toggleCartDisplay, cart }) {
	return (
		<>
			<section className="Nav-container">
				<div className="Nav-wrap">
					<ul className="mx-auto Nav-lists">
						{toggleMenuState ? (
							<li
								onClick={toggleMenu}
								className="Hamburger-cover cursor-pointer"
							>
								<div className="Hamburger closeMenu">X</div>
							</li>
						) : (
							<li className="Hamburger-cover cursor-pointer">
								<img
									alt="Hamburger"
									src={'/assets/shared/icon-hamburger.svg'}
									onClick={toggleMenu}
									className="Hamburger"
								/>
							</li>
						)}

						<li>
							<div
								className="Logo"
								onClick={toggleMenuState === true ? toggleMenu : () => {}}
							>
								<Link to={`/`}>SoundSavyShop</Link>
							</div>
						</li>
						<li>
							<ul className="Nav-links">
								<li>
									<Link to={`/`}>Home</Link>
								</li>
								<li>
									<Link to={`/categories/headphones`}>Headphones</Link>
								</li>
								<li>
									<Link to={`/categories/speakers`}>Speakers</Link>
								</li>
								<li>
									<Link to={`/categories/earphones`}>Earphones</Link>
								</li>
							</ul>
						</li>
						<li className="Cart">
							<motion.div
								key={cart.length}
								initial={{ scale: 1 }}
								animate={{ scale: [1, 1.3, 0.95, 1] }}
								transition={{ duration: 0.4 }}
								className="relative"
								onClick={toggleCartDisplay}
							>
								<img src={'/assets/shared/icon-cart.svg'} alt="Cart" />
								{cart.length > 0 && (
									<span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
										{cart.length}
									</span>
								)}
							</motion.div>
						</li>
					</ul>
					<hr className="Horizontal-rule" />
				</div>
			</section>
		</>
	);
}

export default Navigation;
