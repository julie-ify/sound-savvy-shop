import { motion } from 'framer-motion';
import ListItem from './ListItem';
import '../styles/List.scss';
import { filterCategory } from '../utils/selectors';

function List({ categoryState, toggleMenu }) {
	const category = filterCategory(categoryState);

	const categoryLists =
		category.length > 0 ? (
			category.map((category, index) => (
				<motion.div
					key={category.id}
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: index * 0.1 }}
					viewport={{ once: true }}
				>
					<ListItem
						category={category}
						toggleMenu={toggleMenu}
						toToggle={false}
					/>
				</motion.div>
			))
		) : (
			<section className="ListItem-container">
				<div className="ListItem-wrapper" />
				<p>Loading ....</p>
			</section>
		);

	return <div className="List-lists">{categoryLists}</div>;
}

export default List;
