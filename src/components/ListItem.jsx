import React from 'react';
import '../styles/ListItem.scss';
import { Link } from 'react-router-dom';

function ListItem({ category, toggleMenu }) {
	let page = category.category.toLowerCase();

	return (
		<section className="ListItem-container">
			<div className="ListItem-wrapper">
				<div className="ListItem-lists">
					<div className={`ListItem-img ${category.category}`}></div>
					<div>
						<h1 className="List-main-text">{category.category}</h1>
					</div>
					<div onClick={toggleMenu}>
						<Link to={page ? `/categories/${page}` : '/'}>
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
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ListItem;
