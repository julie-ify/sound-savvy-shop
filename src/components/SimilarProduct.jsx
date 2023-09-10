import React from 'react';
import { similarPhotos } from '../utils/selectors';
import Button from './Button';
import { useParams } from 'react-router-dom';

function SimilarProduct({ selectedProduct }) {
	// console.log(similarPhotos(selectedProduct));
	const { category } = useParams()
	const similarPhotosList = similarPhotos(selectedProduct).map(
		(photo, index) => {
			// console.log(photo);
			return (
				<div key={index} className="Background-similar-photos">
					<div>
						<img
							className="Similar-photos"
							src={`/${photo.image.mobile}`}
							alt=""
						/>
					</div>
					<div>
						<h1 className="Lg-text">{photo.name}</h1>
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
	return <div>{similarPhotosList}</div>;
}

export default SimilarProduct;
