export const filterCategory = (categoryArr) => {
	let arr = [];
	const homePageCategory = [3, 6, 1];
	for (let i = 0; i < homePageCategory.length; i++) {
		const category = categoryArr.filter(
			(category) => homePageCategory[i] === category.id
		);
		arr = [...arr, ...category];
	}

	return arr;
};

// Converts the currency and price to human readable format e.g $2,000
export const currencyConverter = (price) => {
	const currencySymbol = '$';

	const formattedAmount = `${currencySymbol} ${price.toLocaleString(
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
					const finalImgJoin = `${imagesArr2[0]}-${imagesArr2[1]}${
						imagesArr2[3] ? imagesArr2[3] : ''
					}`;
					return { finalImgJoin, photoName: photo.name, slug: photo.slug };
				});
			return gallery[0];
		});
	return filterUnigueImage;
};

export const totalCartAmount = (cart) => {
	const itemInCart = cart.map((item) => {
		return item.total;
	});

	const sumTotal = itemInCart.reduce((start, next) => {
		return start + next
	}, 0)

	const convertedCurrency = currencyConverter(sumTotal)
	return convertedCurrency;
};
