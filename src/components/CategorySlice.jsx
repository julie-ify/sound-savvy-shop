import { motion } from 'framer-motion';
import Button from './Button';
import '../styles/CategorySlice.scss';

function CategorySlice({ categories, param }) {
	const reversedCategories = [...categories].reverse();

	const categoriesList = reversedCategories.map((category, index) => {
		return (
			<motion.div
				key={category.id}
				className={`Category-item-grid ${(index + 1) % 2 !== 0 ? '' : 'Order'}`}
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
				viewport={{ once: true, amount: 0.1 }}
			>
				<img src={` ${category.categoryImage}`} className="Image-card Product-image" alt='Product' />
				<div className="Category-grid">
					{reversedCategories[0].name === category.name && (
						<h2 className="Md-text">New product</h2>
					)}
					<h1 className="Xlg-text">
						{category.name.split(' ').slice(0, -1).join(' ')}
						<br />
						<span>{category.name.split(' ').slice(-1).join('')}</span>
					</h1>
					<p className="Sm-text">{category.description}</p>
					<Button
						label={'See Product'}
						color={'colored'}
						route={`categories/${param}/${category.slug}`}
					/>
				</div>
			</motion.div>
		);
	});

	return (
		<section className="Category-container">
			<div className="Category-wrapper">{categoriesList}</div>
		</section>
	);
}

export default CategorySlice;
