import React from 'react';
import '../../styles/Navigation.scss';
import { Link } from 'react-router-dom';
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg';
import Chart from '../../assets/shared/desktop/icon-cart.svg';

function Navigation({ toggleMenu, toggleMenuState, toggleCartDisplay }) {
	return (
		<>
			<section className="Nav-container">
				<div className="Nav-wrap">
					<ul className="mx-auto Nav-lists">
						{toggleMenuState ? (
							<li onClick={toggleMenu} className='Hamburger-cover'>
								<div className="Hamburger closeMenu">X</div>
							</li>
						) : (
							<li className='Hamburger-cover'>
								<img
									alt="Hamburger"
									src={Hamburger}
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
						<li className="Chart">
							<img src={Chart} alt="Cart" onClick={toggleCartDisplay}/>
						</li>
					</ul>
					<hr className="Horizontal-rule" />
				</div>
			</section>
		</>
	);
}

export default Navigation;
