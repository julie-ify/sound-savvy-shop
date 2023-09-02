import React from 'react';
import '../styles/ListItem.scss';

function ListItem({ category }) {
	return (
		<section className="ListItem-container">
			<div className="ListItem-wrapper">
				<div className="ListItem-lists">
					<div className={`ListItem-img ${category.name}`}></div>
					<div>
						<h1 className="List-main-text">{category.name}</h1>
					</div>
					<div className="List-btn-lists">
						<h2 className="List-sub-text">Shop</h2>
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

export default ListItem;
