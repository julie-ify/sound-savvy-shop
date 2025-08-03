export function useValidation(selectedOption = 'e-money') {
	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const validateForm = (formdata) => {
		const { email } = formdata;

		const requiredFields = {
			name: 'This field is required',
			email: 'This field is required',
			phone: 'This field is required',
			address: 'This field is required',
			zip: 'This field is required',
			city: 'This field is required',
			country: 'This field is required',
		};

		if (selectedOption === 'e-money') {
			requiredFields.eMoneyNumber = 'This field is required';
			requiredFields.eMoneyPin = 'This field is required';
		}

		const errors = {};

		for (let field in requiredFields) {
			if (!formdata[field]?.trim()) {
				errors[`${field}Error`] = requiredFields[field];
			}
		}

		if (email && !validateEmail(email)) {
			errors.emailError = 'Please use a valid email address';
		}

		return errors;
	};

	return { validateForm };
}
