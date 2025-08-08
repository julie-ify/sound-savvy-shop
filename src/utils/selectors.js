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

	const formattedAmount = `${currencySymbol} ${price.toLocaleString('en-US')}`;

	return formattedAmount;
};

export const navigationPage = (page) => {
	window.location.href = page
		? page === 'home'
			? '/'
			: `/categories/${page}`
		: '/';
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
		return start + next;
	}, 0);

	const convertedCurrency = currencyConverter(sumTotal);
	return convertedCurrency;
};

export const totalCartAmountPlain = (cart) => {
	const itemInCart = cart.map((item) => {
		return item.total;
	});

	const sumTotal = itemInCart.reduce((start, next) => {
		return start + next;
	}, 0);
	return sumTotal;
};

export const appearance = {
	theme: 'stripe',

	variables: {
		colorPrimary: '#0570de',
		colorBackground: '#ffffff',
		colorText: '#30313d',
		colorDanger: '#df1b41',
		fontFamily: 'Ideal Sans, system-ui, sans-serif',
		spacingUnit: '2px',
		borderRadius: '4px',
	},
};

export const vatCalculator = (cart) => {
	const totalAmount = totalCartAmountPlain(cart);
	const shippingFee = 50;
	const twentyPercent = 20 / 100;
	const vat = twentyPercent * totalAmount;
	const normalVat = Number(vat.toFixed())
	const humanizedVat = currencyConverter(Number(vat.toFixed()));
	return { humanizedVat, normalVat, shippingFee };
};
