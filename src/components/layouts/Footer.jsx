import React from 'react';
import '../../styles/Footer.scss';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
	const navigationPage = (page) => {
		window.location.href = page ? page === 'home' ? '/' :`/categories/${page}` : '/';
	};
	return (
		<section className="Footer-container">
			<div className="Footer-wrapper">
				<ul className="Footer-outer-grid">
					<li className="Footer-border"></li>
					<li className="Footer-Logo">SoundSavyShop</li>
					<li>
						<ul className="Footer-lists">
							<li onClick={() => navigationPage('home')}>Home</li>
							<li onClick={() => navigationPage('headphones')}>Headphones</li>
							<li onClick={() => navigationPage('speakers')}>Speakers</li>
							<li onClick={() => navigationPage('earphones')}>Earphones</li>
						</ul>
					</li>
					<li>
						<p className="Footer-paragraph">
							SoundSavyShop is an all in one stop to fulfill your audio needs.
							We're a small team of music lovers and sound specialists who are
							devoted to helping you get the most out of personal audio. Come
							and visit our demo facility - we’re open 7 days a week.
						</p>
					</li>
					<li>
						<p className="Footer-copyright">
							Copyright 2023. All Rights Reserved
						</p>
					</li>
					<li className="Footer-icons">
						<AiFillFacebook />
						<AiOutlineTwitter />
						<AiFillLinkedin />
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Footer;
