import React from 'react';
import { similarPhotos } from '../utils/selectors';
import { useParams } from 'react-router-dom';
import Button from './Button';
import '../styles/SimilarProduct.scss';

function SimilarProduct({ selectedProduct }) {
	const { category } = useParams();
	const similarPhotosList = similarPhotos(selectedProduct).map(
		(photo, index) => {
			console.log(photo);
			return (
				<div key={index} className="Similar-products">
					<div className={photo.finalImgJoin}></div>
					<div>
						<h1 className="heading-text">{photo.photoName}</h1>
					</div>
					<Button
						label={'See Product'}
						color={'colored'}
						route={`categories/${category}/${photo.slug}`}
					/>
				</div>
			);
		}
	);
	return (
		<div>
			<div className="Lg-text text-center mb-12">you may also like</div>
			<div className="Similar-product-grid"> {similarPhotosList}</div>
		</div>
	);
}

export default SimilarProduct;
