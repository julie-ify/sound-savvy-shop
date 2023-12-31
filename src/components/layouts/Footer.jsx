import React from 'react';
import '../../styles/Footer.scss';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { navigationPage } from '../../utils/selectors';

function Footer() {
	return (
		<section className="Footer-container">
			<div className="Footer-wrapper">
				<ul className="Footer-outer-grid">
					<li className="Footer-border"></li>
					<ul className="Footer-top-grid">
						<li className="Footer-Logo">SoundSavyShop</li>
						<li>
							<ul className="Footer-lists">
								<li onClick={() => navigationPage('home')}>Home</li>
								<li onClick={() => navigationPage('headphones')}>Headphones</li>
								<li onClick={() => navigationPage('speakers')}>Speakers</li>
								<li onClick={() => navigationPage('earphones')}>Earphones</li>
							</ul>
						</li>
					</ul>
					<li className="Footer-bottom-grid">
						<div className="Footer-bottom-first">
							<p className="Footer-paragraph">
								SoundSavyShop is an all in one stop to fulfill your audio needs.
								We're a small team of music lovers and sound specialists who are
								devoted to helping you get the most out of personal audio. Come
								and visit our demo facility - we’re open 7 days a week.
							</p>
						</div>
						<div className="Footer-bottom-second">
							<p className="Footer-copyright">
								Copyright 2023. All Rights Reserved
							</p>
						</div>
						<ul className="Footer-icons">
							<li>
								<a
									href="https://github.com/julie-ify"
									target="_blank"
									rel="noreferrer"
								>
									<AiFillGithub />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/julianaifionu/"
									target="_blank"
									rel="noreferrer"
								>
									<AiFillLinkedin />
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/juliana_ifionu"
									target="_blank"
									rel="noreferrer"
								>
									<AiOutlineTwitter />
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Footer;
