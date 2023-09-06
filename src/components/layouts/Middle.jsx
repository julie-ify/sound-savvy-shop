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
						<div className="Outermost-card">
							<div>
								<div className="Inner-card-1">
									<div className="Inner-card-2">
										<div className="Inner-card-3"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="Innermost-card">
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
					<div className="Card-2">
						<div className="Inner-card-2-grid">
							<h1 className="Inner-card-2-main-text">ZX7 SPEAKER</h1>
							<Button label={'See Product'} color={'transparent'} />
						</div>
					</div>
					<div className="Card-3-4-grid">
						<div className="Card-3"></div>
						<div className="Card-4">
							<div className="Inner-card-4-grid">
								<h1 className="Inner-card-2-main-text">YX1 EARPHONES</h1>
								<Button label={'See Product'} color={'transparent'} />
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
