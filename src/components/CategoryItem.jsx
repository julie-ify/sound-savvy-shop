import React from 'react';
import '../styles/CategoryItem.scss';
import Headphones from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';

function CategoryItem() {
	return (
		<section className="CategoryItem-container">
			{/* <div className="CategoryItem-wrapper"> */}
				<ul className="CategoryItem-wrapper">
					<li className='CategoryItem-headphone'>
						<img className='' src={Headphones} />
					</li>
					<li className="">
						<h2 className="Category-main-text">Headphones</h2>
					</li>
					<li className="Category-btn-lists">
						<h3 className="Category-sub-text">Shop</h3>
						<svg
							className="Category-btn"
							xmlns="http://www.w3.org/2000/svg"
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
						>
							<path
								d="M1.32178 1L6.32178 6L1.32178 11"
								stroke="#D87D4A"
								stroke-width="2"
							/>
						</svg>
					</li>
				</ul>
			{/* </div> */}
		</section>
	);
}

export default CategoryItem;
