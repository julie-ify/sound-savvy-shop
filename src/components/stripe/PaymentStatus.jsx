import { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import '../../styles/PaymentStatus.scss';
import SuccessAnimation from './Success';
import { Rings } from 'react-loader-spinner';
import { currencyConverter } from '../../utils/selectors';
import { useNavigate } from 'react-router-dom';

const PaymentStatus = ({ cart, setCart }) => {
	const stripe = useStripe();
	const [message, setMessage] = useState(null);
	const [success, setIsSuccess] = useState(false);
	const [payment, setPayment] = useState(null);
	const [isViewMore, setIsViewMore] = useState(false);
	const navigate = useNavigate();

	const clearStorage = () => {
		localStorage.removeItem('soundSavvyCart');
		setCart([]);
		window.location.href = '/';
		return;
	};

	const toggleView = () => {
		setIsViewMore(!isViewMore);
	};

	useEffect(() => {
		if (!stripe) {
			return;
		}
		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret'
		);

		// Retrieve the PaymentIntent
		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			// Inspect the PaymentIntent `status` to indicate the status of the payment to my customer.
			switch (paymentIntent.status) {
				case 'succeeded':
					setMessage('THANK YOU FOR YOUR ORDER');
					setIsSuccess(true);
					setPayment(paymentIntent.amount);
					break;

				case 'processing':
					setMessage(
						"Payment processing. We'll update you when payment is received."
					);
					setIsSuccess(false);
					break;

				case 'requires_payment_method':
					setMessage('Payment failed. Please try another payment method.');
					setIsSuccess(false);
					break;

				default:
					setMessage('Something went wrong.');
					setIsSuccess(false);
					break;
			}
		});
	}, [stripe]);

	return (
		<>
			{message ? (
				success ? (
					<div className="Status-container">
						<div className="Status-cover">
							<div className="Status-wrapper">
								<div>
									<SuccessAnimation />
									<div className="Checkout-btn mt-10">
										<div className="Status-main-text">{message}</div>
										<div className="Status-sub-text">
											You will receive an email confirmation shortly.
										</div>
										<div>
											<div className="Status-inner-grid-wrapper">
												<div className="Separator">
													<div className="Status-hide-items">
														{cart.length > 0 ? (
															cart.map((lineItem) => {
																return (
																	<div
																		key={lineItem.id}
																		className={`Status-inner-grid ${
																			isViewMore ? 'View-more' : 'View-less'
																		}`}
																	>
																		<div className="Status-img-section">
																			<img
																				src={`${lineItem.cartImage}`}
																				className="Cart-product-img"
																				alt="Product"
																			/>
																			<div className="Cart-price-tag">
																				<h1>
																					{lineItem.name
																						.split(' ')
																						.slice(0, 1)
																						.join(' ')}
																				</h1>
																				<p className="pay-paragraph">
																					{currencyConverter(lineItem.price)}
																				</p>
																			</div>
																		</div>
																		<div className="Status-quantity">
																			x{lineItem.quantity}
																		</div>
																	</div>
																);
															})
														) : (
															<div>No items in the cart</div>
														)}
													</div>
													<div>
														<hr className="Status-hr" />
														<div
															className="Status-more-items"
															onClick={toggleView}
														>
															{cart.length < 2
																? ''
																: !isViewMore
																? `	and ${cart.length - 1} other item${
																		cart.length - 1 <= 1 ? '' : '(s)'
																  }`
																: 'View less'}
														</div>
													</div>
												</div>
												<div className="Status-total">
													<h1>Grand Total</h1>
													<div>{currencyConverter(payment / 100)}</div>
												</div>
											</div>
										</div>
										<button
											className="Btn colored smaller"
											onClick={clearStorage}
										>
											back to Home
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="Status-container">
						<div className="Status-cover">
							<div className="Status-wrapper">
								<div className="Checkout-btn mt-10">
									<div className="mb-10">{message}</div>

									<button
										className="Btn colored wider"
										onClick={() => navigate('/checkout')}
									>
										Retry
									</button>
								</div>
							</div>
						</div>
					</div>
				)
			) : (
				<div className="Loader">
					<Rings
						height="100vh"
						width="80"
						color="#d87d4a"
						radius="6"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
						ariaLabel="rings-loading"
					/>
				</div>
			)}
		</>
	);
};

export default PaymentStatus;
