import React from 'react';
import '../../styles/MiddleFooter.scss';

function MiddleFooter() {
	return (
		<section className="Middle-footer-container">
			<div className="Middle-footer-wrapper">
				<div className="Middle-grid">
					<div className='Card-5-cover'>
						<div className="Card-5"></div>
					</div>
					<div className="Middle-texts">
						<h1 className="Middle-main-text">
							<span>
								Bringing you the <span className="Text-colored">best</span>{' '}
								audio gear
							</span>
						</h1>
						<p className="Middle-paragraph">
							Located at the heart of New York City, Audiophile is the premier
							store for high end headphones, earphones, speakers, and audio
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MiddleFooter;
