import React, { useState } from 'react';
import {
	PaymentElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import '../../styles/CheckoutForm.scss';

const CheckoutForm = ({ isPayOpen, togglePayOpen }) => {
	const stripe = useStripe();
	const elements = useElements();

	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: 'https://soundsavvyshop.netlify.app/pay/status', 
				// return_url: 'http://localhost:3000/pay/status', 
				// page to redirect to after confirming payment
				// It could be success or failure
				// In the return_url, stripe passes, the payment_intent_is, the clinet_secret_id, and the payment status
				// Which we then used to show the user the status of their transaction
			},
		});

		if (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<div
			className={`CheckoutForm-container ${
				isPayOpen ? 'CheckoutForm-visibility' : ''
			}`}
		>
			<div className="CheckoutForm-wrapper">
				<span onClick={togglePayOpen} className="CheckoutForm-close-btn">
					X
				</span>
				<form onSubmit={handleSubmit}>
					<PaymentElement />
					<div className="Checkout-btn mt-10">
						<button disabled={!stripe} className="Btn colored wider">
							submit
						</button>
						{errorMessage && <div>{errorMessage}</div>}
					</div>
				</form>
			</div>
		</div>
	);
};

export default CheckoutForm;
