import React from 'react';
import { similarPhotos } from '../utils/selectors';

function SimilarProduct({ selectedProduct }) {
	// console.log(similarPhotos(selectedProduct));
	const similarPhotosList = similarPhotos(selectedProduct).map(
		(photo, index) => {
			console.log(photo)
			return (
				<div key={index}>
					<div className='Background-similar-photos'>
						<img className="Similar-photos" src={`http://localhost:3000/${photo.image.mobile}`} alt="" />
					</div>
					<div>
						<h1 className="Lg-text">{photo.name}</h1>
					</div>
				</div>
			);
		}
	);
	return <div>{similarPhotosList}</div>;
}

export default SimilarProduct;
