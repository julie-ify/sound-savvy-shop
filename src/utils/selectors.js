export const filterCategory = (categoryArr, thumbNail) => {
	// console.log(thumbNail)
	let counter = 0;
	let arr = [];
	const homePageCategory = [3, 6, 1];
	for (let i = 0; i < homePageCategory.length; i++) {
		const category = categoryArr.filter(
			(category) => homePageCategory[i] === category.id
		).map((cat) => {
			return {
				...cat,
				thumbnailImg: thumbNail[counter ++].image
			}
		})
		arr = [...arr, ...category];
	}

	return arr;
};

// Converts the currency and price to human readable format e.g $2,000
export const currencyConverter = (selectedProduct) => {
	const currencySymbol = '$';

	const formattedAmount = `${currencySymbol} ${selectedProduct.price.toLocaleString(
		'en-US'
	)}`;

	return formattedAmount;
};

export const navigationPage = (page) => {
	window.location.href = page
		? page === 'home'
			? '/'
			: `/categories/${page}`
		: '/';
};

// Extracting the unique image names withoup the .png
export const productGallery = (selectedProduct) => {
	if (selectedProduct) {
		let gallery = Object.values(selectedProduct.gallery).map((obj) => {
			return obj.mobile.split('/')[obj.mobile.split('/').length - 1];
		});

		let uniqueImage = gallery.map((item) => {
			return item.split('.')[0];
		});
		return uniqueImage;
	}
};

export const similarPhotos = (selectedProduct) => {
	const similarPhotosArr = selectedProduct && selectedProduct.others;
	const filterUnigueImage =
		similarPhotosArr &&
		similarPhotosArr.map((photo) => {
			let gallery = Object.values(photo.image)
				.map((img) => {
					let imagesArr = img.split('/');
					return imagesArr[imagesArr.length - 1];
				})
				.map((imgSplit) => {
					let imagesArr2 = imgSplit.split('-');
					const finalImgJoin = `${imagesArr2[0]}-${imagesArr2[1]}`;
					return { finalImgJoin, photoName: photo.name };
				});
			return gallery[0];
		});
	return filterUnigueImage;
};
