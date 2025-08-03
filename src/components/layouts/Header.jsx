import { motion } from 'framer-motion';
import '../../styles/Header.scss';
import Button from '../Button';
import Navigation from './Navigation';

function Header({
	toggleMenu,
	toggleMenuState,
	isCartOpen,
	toggleCartDisplay,
	cart,
}) {
	const route = `categories/headphones/xx99-mark-two-headphones`;
	return (
		<section className="Header-background">
			<Navigation
				toggleMenu={toggleMenu}
				toggleMenuState={toggleMenuState}
				isCartOpen={isCartOpen}
				toggleCartDisplay={toggleCartDisplay}
				cart={cart}
			/>
			<div className="Header-wrapper">
				<motion.div
					className="Header-content"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 30 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								staggerChildren: 0.2,
								duration: 0.6,
							},
						},
					}}
				>
					<motion.h1
						className="Header-paragraph"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						NEW PRODUCT
					</motion.h1>
					<motion.h1
						className="Header-main-text"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						XX99 Mark II HeadphoneS
					</motion.h1>
					<motion.h3
						className="Header-sub-text"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</motion.h3>
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<Button label={'See Product'} color={'colored'} route={route} />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default Header;
