import React, { Component } from 'react';
import './about.scss';
import '../common/commonStyles.scss';
import img1 from './img/photo1.png'
import img2 from './img/photo2.png'
import icon1 from './img/1.svg'
import icon2 from './img/2.svg'
import icon4 from './img/4.svg'


class About extends Component {
    render() {
        return (
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
                        <img src={icon4} alt=""></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
