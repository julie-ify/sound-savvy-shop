import React, { useState } from 'react';
import Navigation from '../layouts/Navigation';
import Alert from '../Alert';
import { useNavigate } from 'react-router-dom';
import '../../styles/Checkout.scss';
import {
	currencyConverter,
	totalCartAmount,
	totalCartAmountPlain,
} from '../../utils/selectors';
import Footer from '../layouts/Footer';

function Checkout({
	toggleMenu,
	isCartOpen,
	toggleCartDisplay,
	alert,
	cart,
	togglePayOpen,
}) {
	const [selectedOption, setSelectedOption] = useState('e-money');

	const handleSelectedOption = (e) => {
		setSelectedOption(e.target.value);
	};

	const history = useNavigate();

	return (
		<section className={`Checkout`}>
			<Navigation
				toggleMenu={toggleMenu}
				isCartOpen={isCartOpen}
				toggleCartDisplay={toggleCartDisplay}
			/>
			<Alert alert={alert} message={'Cart was successfully cleared'} />
			<div className="Checkout-container">
				<div className="Checkout-wrapper">
					<div className="Checkout-main-grid">
						<section className='Checkout-upper-layer'>
							<div className="">
								<button className="Back-btn-checkout" onClick={() => history(-1)}>
									Go Back
								</button>
							</div>
							<div className="Checkout-form">
								<form className="Checkout-form-wrapper">
									<h1 className="Checkout-main-text">Checkout</h1>
									<div className="Checkout-parts">
										<h2 className="Checkout-sub-text">Billing details</h2>
										<div className="Form-fields">
											<div className="Form-group">
												<label htmlFor="name">Name</label>
												<input
													placeholder="Alexei Ward"
													className="Form-input"
													type="text"
													id="name"
													name="name"
												/>
											</div>
											<div className={`Form-group error`}>
												{/* <div className="Form-label-grid">
											<label>Email Address</label>
											<span>Wrong format</span>
										</div> */}

												<label htmlFor="email">Email Address</label>
												<input
													placeholder="alexei@gmail.com"
													className="Form-input"
													type="text"
													id="email"
													name="email"
												/>
											</div>
											<div className="Form-group">
												<label htmlFor="phone">Phone Number</label>
												<input
													placeholder="+1202-555-0136"
													className="Form-input"
													type="text"
													id="phone"
													name="phone"
												/>
											</div>
										</div>
									</div>
									<div className="Checkout-parts">
										<h2 className="Checkout-sub-text">Shipping Info</h2>
										<div className="Form-fields">
											<div className="Form-diff-group">
												<label htmlFor="address">Your Address</label>
												<input
													placeholder="1137 Williams Avenue"
													className="Form-input"
													type="text"
													name="address"
													id="address"
												/>
											</div>
											<div className="Form-group">
												<label htmlFor="zip">Zip code</label>
												<input
													placeholder="10001"
													className="Form-input"
													type="text"
													id="zip"
													name="zip"
												/>
											</div>
											<div className="Form-group">
												<label htmlFor="city">City</label>
												<input
													placeholder="New York"
													className="Form-input"
													type="text"
													id="city"
													name="city"
												/>
											</div>
											<div className="Form-group">
												<label htmlFor="country">Country</label>
												<input
													placeholder="United States"
													className="Form-input"
													type="text"
													id="country"
													name="country"
												/>
											</div>
										</div>
									</div>

									<div className="Checkout-parts">
										<h2 className="Checkout-sub-text">payment details</h2>
										<div className="Payment-details">
											<span className="payment-method-span">
												Payment method
											</span>
											<div className="Payment-details-option">
												<div className="Form-input-checkbox">
													<input
														onChange={handleSelectedOption}
														className="Form-checkbox"
														type="radio"
														value="e-money"
														id="e-money"
														name="e-money"
														checked={selectedOption === 'e-money'}
													/>
													<label htmlFor="e-money">e-Money</label>
												</div>

												<div className="Form-input-checkbox">
													<input
														onChange={handleSelectedOption}
														className="Form-checkbox"
														type="radio"
														value="cash"
														id="cash"
														name="cash"
														checked={selectedOption === 'cash'}
													/>
													<label htmlFor="cash">Cash on Delivery</label>
												</div>
											</div>
										</div>
									</div>

									<div
										className={`Checkout-parts-emoney ${
											selectedOption === 'e-money' ? 'Show-emoney' : ''
										}`}
									>
										<div className="Form-group">
											<label htmlFor="e-money-number">e-Money Number</label>
											<input
												placeholder="238521993"
												className="Form-input"
												type="text"
												id="e-money-number"
												name="e-money-number"
											/>
										</div>
										<div className="Form-group">
											<label htmlFor="e-money-pin">e-Money Pin</label>
											<input
												placeholder="6891"
												className="Form-input"
												type="text"
												id="e-money-pin"
												name="e-money-pin"
											/>
										</div>
									</div>

									<div
										className={`Checkout-parts-emoney ${
											selectedOption === 'cash' ? 'Show-cash' : ''
										}`}
									>
										<div className="Cash-group">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="48"
												height="48"
												viewBox="0 0 48 48"
												fill="none"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
													fill="#D87D4A"
												/>
											</svg>
										</div>
										<div>
											<p>
												The ‘Cash on Delivery’ option enables you to pay in cash
												when our delivery courier arrives at your residence.
												Just make sure your address is correct so that your
												order will not be cancelled.
											</p>
										</div>
									</div>
								</form>
							</div>
						</section>
						<section className="Summary-container">
							<div className="Summary-wrapper">
								<h1 className="Summary-main-text">Summary</h1>
								<div className="Summary-inner-grid-wrapper">
									{cart.length > 0 ? (
										cart.map((lineItem) => {
											return (
												<div key={lineItem.id} className="Summary-inner-grid">
													<div className="Summary-img-section">
														<div
															className={`Cart-product-img Product-id-${lineItem.id}`}
														></div>
														<div className="Cart-price-tag">
															<h1>
																{lineItem.name.split(' ').slice(0, 1).join(' ')}
															</h1>
															<p>{currencyConverter(lineItem.price)}</p>
														</div>
													</div>
													<div className="Summary-quantity">
														x{lineItem.quantity}
													</div>
												</div>
											);
										})
									) : (
										<div>No items in the cart</div>
									)}
								</div>

								{cart.length > 0 && (
									<div>
										<div>
											<div className="Summary-last-grid">
												<p>Total</p>
												<h1>{totalCartAmount(cart)}</h1>
											</div>
											<div className="Summary-last-grid">
												<p>Shipping</p>
												<h1>{currencyConverter(50)}</h1>
											</div>
											<div className="Summary-last-grid">
												<p>Vat (Included)</p>
												<h1>{currencyConverter(1079)}</h1>
											</div>
										</div>

										<div className="Summary-grand-total">
											<p>Grand total</p>
											<h1>
												{currencyConverter(totalCartAmountPlain(cart) + 50)}
											</h1>
										</div>

										<div className="Checkout-btn">
											<button
												className="Btn colored wider"
												onClick={togglePayOpen}
											>
												Checkout
											</button>
										</div>
									</div>
								)}
							</div>
						</section>
					</div>
				</div>
				<Footer />
			</div>
		</section>
	);
}

export default Checkout;
