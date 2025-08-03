import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Menu.scss';
import ListItem from '../ListItem';
import { filterCategory } from '../../utils/selectors';

function Menu({ toggleMenuState, categoryState, toggleMenu }) {
	const category = filterCategory(categoryState);

	return (
		<AnimatePresence mode="wait">
			{toggleMenuState && (
				<motion.section
					className="Menu-container"
					initial={{ x: '-100%', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: '-100%', opacity: 0 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<div className="Menu-wrapper">
						<div className="Menu-lists">
							{category.length > 0 ? (
								category.map((category, index) => (
									<motion.div
										key={category.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.9, delay: index * 0.1 }}
									>
										<ListItem
											category={category}
											toggleMenu={toggleMenu}
											toToggle={true}
										/>
									</motion.div>
								))
							) : (
								<section className="ListItem-container">
									<div className="ListItem-wrapper" />
									<p>Loading ....</p>
								</section>
							)}
						</div>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default Menu;
