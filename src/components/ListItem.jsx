import '../styles/ListItem.scss';
import { useNavigate } from 'react-router-dom';

function ListItem({ category, toggleMenu, toToggle }) {
	const navigate = useNavigate();

	let page = category.category.toLowerCase();
	const route = page ? `/categories/${page}` : '/';
	return (
		<section className="ListItem-container">
			<div className="ListItem-wrapper">
				<div className="ListItem-lists">
					<img
						src={`/assets/thumbnail/image-category-thumbnail-${category.category}.png`}
						className="ListItem-img"
						alt="thumbnail"
					/>
					<div>
						<h1 className="List-main-text">{category.category}</h1>
					</div>
					<div
						onClick={() => {
							if (toToggle) {
								toggleMenu();
							}
							navigate(route);
						}}
					>
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
			</div>
		</section>
	);
}

export default ListItem;
