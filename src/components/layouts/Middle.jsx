import React from 'react';
import '../../styles/Middle.scss';
import Category from '../Category';
import Button from '../Button';

function Middle() {
	return (
		<section className="Middle-container">
			<div className="">
				<Category />
				<div>
					<div className="Card-1">
						<div className="Inner-card-1">
							<div className="Inner-card-2">
								<div className="Inner-card-3"></div>
								<div className="Inner-card-grid">
									<h1 className="Inner-card-main-text">
										ZX9
										<br />
										SPEAKER
									</h1>
									<p className="Inner-card-paragraph">
										Upgrade to premium speakers that are phenomenally built to
										deliver truly remarkable sound.
									</p>
									<Button label={'See Product'} color={'black'} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Middle;
