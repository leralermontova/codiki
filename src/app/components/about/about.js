import React, { Component } from 'react';
import './about.scss';
import './finance.scss';
import '../common/commonStyles.scss';
import img1 from './img/photo1.png'
import img2 from './img/photo2.png'
import icon1 from './img/1.svg'
import icon2 from './img/2.svg'
import icon4 from './img/4.svg'
import img3 from './img/back.png'


class About extends Component {
    render() {
        return (
			<div className="about-wrapper">
				<div className="about">
					<div className="wrapper">
						<div className="about-inner">
							<div className="about-inner__header">
								<h1>O nas</h1>
							</div>
							<div className="about-inner__item-wrap">
								<div className="text-container">
									<h2><strong>Lake</strong> village</h2>
									<p>To nowoczesne osiedle o zabudowie
										willowej w podwyższonym standardzie
										położone w cichej i bezpiecznej
										okolicy pod Warszawą, w Nowej Woli
									</p>
								</div>
								<div className="img-right">
									<img src={img1} alt=""/>
								</div>
								<div className="img-left">
									<img src={img2} alt=""/>
								</div>
								<div className="text-container second">
									<h2><strong>Lake</strong> village</h2>
									<p>To nowoczesne osiedle o zabudowie
										willowej w podwyższonym standardzie
										położone w cichej i bezpiecznej
										okolicy pod Warszawą, w Nowej Woli
									</p>
								</div>
								<div className="square">
									<div className="square__icon">
										<img src={icon1} alt=""/>
									</div>
									<div className="square__icon">
										<img src={icon2} alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-wrap">
						<div className="footer-wrap__img">
							<img src={icon4} alt=""/>
						</div>
					</div>
				</div>
				<div className="finance">
					<div className="finance__header">
						<h1>O Lake Village</h1>
					</div>
					<div className="finance__statistic">
						<div className="stat-item">
							<div className="stat-item__number">
								<h5>16</h5>
							</div>
							<div className="stat-item__text">
								<p>Domów do sprzedaży</p>
							</div>
						</div>
						<div className="stat-item">
							<div className="stat-item__number">
								<h5>2</h5>
							</div>
							<div className="stat-item__text">
								<p>Typy budynków</p>
							</div>
						</div>
						<div className="stat-item">
							<div className="stat-item__number">
								<h5>1</h5>
							</div>
							<div className="stat-item__text">
								<p>Piękne jezioro</p>
							</div>
						</div>
						<div className="stat-item">
							<div className="stat-item__number">
								<h5>&#8734;</h5>
							</div>
							<div className="stat-item__text">
									<p>Odczucia komfortu</p>
							</div>
						</div>
					</div>
					<div className="finance__fon">
						<img src={img3} alt=""/>
						<div className="description">
							<p> Mieszkanie w <strong>Lake Village</strong> to propozycja dla osób<br/>
								poszukujących połączenia prestiżowej<br/>
								lokalizacji oraz dyskretnej<br/>
								atmosfery sprzyjającej<br/>
								pięlęgnowaniu życia<br/>
								rodzinnego.
							</p>
						</div>
						<a className="slider-button">DOWIEDZ SIĘ WIĘCEJ</a>
					</div>
					<div className="finance__financowanie">
						<div className="fin-header">
							<h1>FINANSOWANIE</h1>
							<p>
								Naszym Partnerem do spraw kredytowania jest<br/>
								firma <strong>NOTUS</strong>
							</p>
						</div>
						<div className="finance-info">
							<div className="finance-list">
								<ul>
									<li><strong>Umówi</strong> się o dogodnej porze aby spotkać się w ustalonym miejscu</li>
									<li><strong>Potwierdzi</strong> zdolność kredytową</li>
									<li><strong>Wynegocjuje</strong> najlepsze warunki kredytowe</li>
									<li><strong>Zapewni</strong> pomoc m.in. przy kompletowaniu dokumentów
										i podpisywaniu umowy</li>
									<li><strong>Gwarantuje</strong> opiekę i konsultacje również w trakcie
										całego okresu kredytowania</li>
								</ul>
							</div>
							<div className="finance-contacts">
								<p>Skontaktuj się z dedykowanym
									doradcą finansowym:</p>
								<p>Piotr Brzozowski</p>
								<ul>
									<li>+48 695 672 907</li>
									<li>piotr.brzozowski@dknotus.pl</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
				
        );
    }
}

export default About;
