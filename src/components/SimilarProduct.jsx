import React from 'react';
import { similarPhotos } from '../utils/selectors';
import { useParams } from 'react-router-dom';
import Button from './Button';
import '../styles/SimilarProduct.scss';

function SimilarProduct({ selectedProduct }) {
	const { category } = useParams();
	const similarPhotosList = similarPhotos(selectedProduct).map(
		(photo, index) => {
			return (
				<div key={index} className="Similar-products">
					<div className={`Similar-product-card ${photo.finalImgJoin}`}></div>
					<div>
						<h1 className="Md-font-product">{photo.photoName}</h1>
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
		<div className='Similar-product-wrapper'>
			<div className="Lg-font-product text-center">you may also like</div>
			<div className="Similar-product-grid"> {similarPhotosList}</div>
		</div>
	);
}

export default SimilarProduct;
