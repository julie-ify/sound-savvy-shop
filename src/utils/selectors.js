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
