import React from 'react';
import { similarPhotos } from '../utils/selectors';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/SimilarProduct.scss';

function SimilarProduct({ selectedProduct }) {
	const navigate = useNavigate();
	const { category } = useParams();
	const similarPhotosList = similarPhotos(selectedProduct).map(
		(photo, index) => {
			return (
				<div key={index} className="Similar-products">
					<div className={`Similar-product-card ${photo.finalImgJoin}`}></div>
					<div>
						<h1 className="Md-font-product">{photo.photoName}</h1>
					</div>
					<button
						className={`Btn colored`}
						onClick={() => navigate(`/categories/${category}/${photo.slug}`)}
					>
						See Product
					</button>
				</div>
			);
		}
	);
	return (
		<div className="Similar-product-wrapper">
			<div className="Lg-font-product text-center">you may also like</div>
			<div className="Similar-product-grid"> {similarPhotosList}</div>
		</div>
	);
}

export default SimilarProduct;
