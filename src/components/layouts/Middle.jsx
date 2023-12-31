import React from 'react';
import '../../styles/Middle.scss';
import List from '../List';
import Button from '../Button';
import MiddleFooter from './MiddleFooter';

function Middle({ categoryState }) {
	return (
		<section className="Middle-container">
			<div className="Middle-wrapper">
				<List categoryState={categoryState} />
				<div>
					<div className="Card-1">
						<div className="Circle1">
							<div className="Circle2">
								<div className="Circle3">
									<div className='Outer-layer'>
										<div className="Inner-img"></div>
										<div className="Inner-card-grid">
											<h1 className="Inner-card-main-text">
												ZX9
												<br />
												SPEAKER
											</h1>
											<p className="Inner-card-paragraph">
												Upgrade to premium speakers that are phenomenally built
												to deliver truly remarkable sound.
											</p>
											<Button
												label={'See Product'}
												color={'black'}
												route={`categories/speakers/zx9-speaker`}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="Card-2">
						<div className="Inner-card-2-grid">
							<h1 className="Inner-card-2-main-text">ZX7 SPEAKER</h1>
							<Button
								label={'See Product'}
								color={'transparent'}
								route={`categories/speakers/zx7-speaker`}
							/>
						</div>
					</div>
					<div className="Card-3-4-grid">
						<div className="Card-3-cover">
							<div className="Card-3"></div>
						</div>
						<div className="Card-4-cover">
							<div className="Card-4">
								<div className="Inner-card-4-grid">
									<h1 className="Inner-card-2-main-text">YX1 EARPHONES</h1>
									<Button
										label={'See Product'}
										color={'transparent'}
										route={`categories/earphones/yx1-earphones`}
									/>
								</div>
							</div>
						</div>
					</div>
					<MiddleFooter />
				</div>
			</div>
		</section>
	);
}

export default Middle;
