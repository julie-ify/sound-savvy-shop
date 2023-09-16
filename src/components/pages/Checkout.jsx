import React, { useState } from 'react';
import Navigation from '../layouts/Navigation';
import Alert from '../Alert';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/Checkout.scss';

function Checkout({ toggleMenu, isCartOpen, toggleCartDisplay, alert }) {
	const [selectedOption, setSelectedOption] = useState('e-money');

	const handleSelectedOption = (e) => {
		setSelectedOption(e.target.value);
	};

	const history = useNavigate();
	const param = useParams();
	const { category } = param;

	// conditionally calculate height of pages
	let heightOfPages;
	if (category === 'headphones') {
		heightOfPages = 'headphones';
	} else if (category === 'speakers') {
		heightOfPages = 'speakers';
	} else if (category === 'earphones') {
		heightOfPages = 'earphones';
	}

	return (
		<section className={`${heightOfPages}-Category`}>
			<Navigation
				toggleMenu={toggleMenu}
				isCartOpen={isCartOpen}
				toggleCartDisplay={toggleCartDisplay}
			/>
			<Alert alert={alert} message={'Cart was successfully cleared'} />
			<div className="Checkout-container">
				<div className="Checkout-wrapper">
					<div>
						<button className="Back-btn" onClick={() => history(-1)}>
							Go Back
						</button>
					</div>
					<section className="Checkout-form">
						<form className="Checkout-form-wrapper">
							<h1 className="Checkout-main-text">Checkout</h1>
							<div className="Checkout-billing">
								<h2 className="Checkout-sub-text">Billing details</h2>
								<div className="Form-group">
									<label>Name</label>
									<input placeholder="Alexei Ward" className="Form-input" />
								</div>
								<div className="Form-group">
									<label>Email Address</label>
									<input
										placeholder="alexei@gmail.com"
										className="Form-input"
									/>
								</div>
								<div className="Form-group">
									<label>Phone Number</label>
									<input placeholder="+1202-555-0136" className="Form-input" />
								</div>
							</div>
							<div className="Checkout-billing">
								<h2 className="Checkout-sub-text">Shipping Info</h2>
								<div className="Form-group">
									<label>Your Address</label>
									<input
										placeholder="1137 Williams Avenue"
										className="Form-input"
									/>
								</div>
								<div className="Form-group">
									<label>Zip code</label>
									<input placeholder="10001" className="Form-input" />
								</div>
								<div className="Form-group">
									<label>City</label>
									<input placeholder="New York" className="Form-input" />
								</div>
								<div className="Form-group">
									<label>Country</label>
									<input placeholder="United States" className="Form-input" />
								</div>
							</div>

							<div className="Checkout-billing">
								<h2 className="Checkout-sub-text">payment details</h2>
								<div className="Form-group">
									<label>Payment method</label>

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
										<label>e-Money</label>
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
										<label>Cash on Delivery</label>
									</div>
								</div>
							</div>

							<div
								className={`Checkout-billing-emoney ${
									selectedOption === 'e-money' ? 'Show-emoney' : ''
								}`}
							>
								<div className="Form-group">
									<label>Zip code</label>
									<input placeholder="10001" className="Form-input" />
								</div>
								<div className="Form-group">
									<label>City</label>
									<input placeholder="New York" className="Form-input" />
								</div>
							</div>
						</form>
					</section>
				</div>
			</div>
		</section>
	);
}

export default Checkout;
