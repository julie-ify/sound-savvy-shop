import data from '../database/data.json'

const getCategories = () => {
	
	const categoryArr = []

	for(const item of data) {
		const categoryData = {}
		categoryData['category'] = item.category
		categoryData['image'] = item
		console.log(categoryData)
	}
	// loop throught the data array and return the category in each data object
	// filter to return unique categories and their images
	// store them in an object and push them to a new array
}