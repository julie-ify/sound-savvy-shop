import React from 'react';
import { similarPhotos } from '../utils/selectors';

function SimilarProduct({ selectedProduct }) {
	console.log(similarPhotos(selectedProduct));
	const similarPhotosList = similarPhotos(selectedProduct).map(
		(photo, index) => {
			return (
				<div key={index}>
					<div className={photo.finalImgJoin}></div>
					<div>
						<h1 className='Lg-text'>{photo.photoName}</h1>
					</div>
				</div>
			);
		}
	);
	return <div>{similarPhotosList}</div>;
}

export default SimilarProduct;
