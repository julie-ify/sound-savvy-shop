import {
	currencyConverter,
	totalCartAmount,
	totalCartAmountPlain,
	vatCalculator,
} from '../utils/selectors';

function CartSummary({ cart, submitHandler }) {
	const { humanizedVat, normalVat, shippingFee } = vatCalculator(cart);
	return (
		<section className="Summary-container">
			<div className="Summary-wrapper">
				<h1 className="Summary-main-text">Summary</h1>

				{cart.length > 0 ? (
					<>
						<div className="Summary-inner-grid-wrapper">
							{cart.map((lineItem) => {
								return (
									<div key={lineItem.id} className="Summary-inner-grid">
										<div className="Summary-img-section">
											<img
												src={`${lineItem.cartImage}`}
												className="Cart-product-img"
												alt="Product"
											/>
											<div className="Cart-price-tag">
												<h1>
													{lineItem.name.split(' ').slice(0, 1).join(' ')}
												</h1>
												<p>{currencyConverter(lineItem.price)}</p>
											</div>
										</div>
										<div className="Summary-quantity">x{lineItem.quantity}</div>
									</div>
								);
							})}
						</div>
						<div>
							<div>
								<div className="Summary-last-grid">
									<p>Total</p>
									<h1>{totalCartAmount(cart)}</h1>
								</div>
								<div className="Summary-last-grid">
									<p>Shipping</p>
									<h1>{currencyConverter(shippingFee)}</h1>
								</div>
								<div className="Summary-last-grid">
									<p>Vat (Included)</p>
									<h1>{humanizedVat}</h1>
								</div>
							</div>

							<div className="Summary-grand-total">
								<p>Grand total</p>
								<h1>
									{currencyConverter(
										totalCartAmountPlain(cart) + shippingFee + normalVat
									)}
								</h1>
							</div>

							<div className="Checkout-btn">
								<button
									className="Btn colored wider"
									onClick={submitHandler}
									type="submit"
								>
									Checkout
								</button>
							</div>
						</div>
					</>
				) : (
					<div className="Summary-inner-grid-wrapper">
						<div>No items in the cart</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default CartSummary;
