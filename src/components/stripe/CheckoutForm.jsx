import { useState } from 'react';
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
			<div className='Checkout-form-section'>
				<div className="Checkout-form-cover">
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
			</div>
		</div>
	);
};

export default CheckoutForm;
