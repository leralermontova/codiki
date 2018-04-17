import React, { Component } from 'react';
import './footer.scss';
import '../common/commonStyles.scss';
import icon1 from './img/7.svg'
import icon2 from './img/4.svg'
import icon3 from './img/5.svg'
import icon4 from './img/1.svg'

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footer__header">
					<h1>kontakt</h1>
				</div>
				<div className="footer__kontakts">
					<div className="kontakt-item">
						<label>BIURO SPRZEDAŻY</label>
						<div className="kontakt-item__wrap">
							<div className="icon">
								<img
									src={icon1}
									alt=""/>
							</div>
							<div className="kontakt-text">
								<p>ul. Plonowa 28 lok. 2<br/>
									05-515 Nowa Wola</p>
							</div>
						</div>
					</div>
					<div className="kontakt-item">
						<div className="kontakt-item__wrap">
							<div className="icon">
								<img
									src={icon2}
									alt=""/>
							</div>
							<div className="kontakt-text">
								<p>512 379 056<br/>
									600 130 593<br/>
									600 130 693</p>
							</div>
						</div>
					</div>
					<div className="kontakt-item">
						<div className="kontakt-item__wrap">
							<div className="icon">
								<img
									src={icon3}
									alt=""/>
							</div>
							<div className="kontakt-text">
								<p>biuro@dynamicdevelopment.pl</p>
							</div>
						</div>
					</div>
					<div className="kontakt-item">
						<label>GODZINY OTWARCIA</label>
						<div className="kontakt-item__wrap">
							<div className="icon">
								<img
									src={icon4}
									alt=""/>
							</div>
							<div className="kontakt-text">
								<p>Pon.-Pt 9-17<br/>
									Sob, Ndz. 11-16</p>
							</div>
						</div>
					</div>
					
				</div>
				<div className="footer__form-partners-wrap">
					<div className="contact-form">
						<label
							htmlFor="form">NAPISZ DO NAS</label>
						<form
							id="contactform"
							action="" method='post'>
							<section className="line-fields">
								<div className="input-wrap">
									<label
										htmlFor="name">Imię (wymagane)</label>
									<input
										id="name"
										name="name"
										autoComplete='off'
										type="text"/>
								</div>
								<div className="input-wrap">
									<label
										htmlFor="phone">Numer telefonu</label>
									<input
										id="phone"
										name="phone"
										autoComplete='off'
										type="text"/>
								</div>
								<div className="input-wrap">
									<label
										htmlFor="email">Adres email (wymagane)</label>
									<input
										id="email"
										autoComplete='off'
										name="email"
										type="text"/>
								</div>
							</section>
							<section className="square-field">
								<div className="input-wrap">
									<label
										htmlFor="message">Treść wiadomości:</label>
									<textarea
										rows='11'
										cols='40'
										id='message'
										name='message'
										autoComplete='off'
										form='contactform'>
									</textarea>
								</div>
							</section>
							<button
								type='submit'
								id='send'>
								WYŚLIJ
							</button>
						</form>
					</div>
				</div>
			</div>
		
		)
	}
}

export default Footer;
