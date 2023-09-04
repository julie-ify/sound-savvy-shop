export const filterCategory = (categoryArr) => {
	let arr = [];
	const homePageCategory = [3, 6, 1];
	for (let i = 0; i < homePageCategory.length; i++) {
		const category = categoryArr.filter(
			(category) => homePageCategory[i] == category.id
		);
		arr = [...arr, ...category];
	}

	return arr;
};

export const currencyConverter = (selectedProduct) => {
	const currencySymbol = '$';

	const formattedAmount = `${currencySymbol} ${selectedProduct.price.toLocaleString(
		'en-US'
	)}`;

	return formattedAmount;
};

export const inTheBox = (selectedProduct) => {
	if (selectedProduct) {
		// console.log(selectedProduct.gallery)
		// console.log(Object.values(selectedProduct.gallery))
		let a = Object.values(selectedProduct.gallery).map((obj) => {
			return obj.mobile.split('/')[obj.mobile.split('/').length - 1]
		});

		let b = a.map((item) => {
			return item.split('.')[0]
		})
		return b
	}
	// console.log(selectedProduct.includes > 0);
	// const inBoxItems =
	// 	selectedProduct !== undefined
	// 		? selectedProduct.includes

	// 	.map((itemInBox) => {
	// 		const key = `${itemInBox.quantity}x`;
	// 		const value = `${itemInBox.item}`;
	// 		return {
	// 			id: new Date().getTime(),
	// 			[key]: value,
	// 		};
	// 	})
	// : []

	// return inBoxItems;
};
