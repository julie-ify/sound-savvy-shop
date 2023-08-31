import React from 'react';
import '../styles/CategoryItem.scss';

function CategoryItem({ category }) {
	return (
		<section className="CategoryItem-container">
			<div className="CategoryItem-wrapper">
				<div className="CategoryItem-lists">
					<div className={`CategoryItem-img ${category.name}`}></div>
					<div>
						<h1 className="Category-main-text">{category.name}</h1>
					</div>
					<div className="Category-btn-lists">
						<h2 className="Category-sub-text">Shop</h2>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
						>
							<path
								d="M1.32178 1L6.32178 6L1.32178 11"
								stroke="#D87D4A"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CategoryItem;
