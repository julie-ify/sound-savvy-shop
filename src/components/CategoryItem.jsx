import React from 'react';
import '../styles/CategoryItem.scss';
import Headphones from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';

function CategoryItem() {
	return (
		<section className="CategoryItem-container">
			{/* <div className="CategoryItem-wrapper"> */}
			<div className="CategoryItem-wrapper">
				<div className='b'>
					<div className="CategoryItem-headphone"></div>
					{/* <img className="CategoryItem-headphone" src={Headphones} /> */}
					<div className="">
						<h2 className="Category-main-text">Headphones</h2>
					</div>
					<div className="Category-btn-lists">
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
					</div>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
}

export default CategoryItem;
