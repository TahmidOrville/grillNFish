import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import fb from '../../images/facebook.PNG';
import insta from '../../images/instagram.PNG';
import logo from '../../grillNFishLogo.png'
const Footer = () => {
    return (
        <section className="footer">
            <div className="flexArea">
                <div className="one">
                    <p>Terms & policies</p>
                    <p>About us</p>
                    <p>Career</p>
                    <p>Outlets</p>
                    <img src={logo} alt="" />
                </div>
                <div className="two">
                    <img src={insta} alt="" />
                </div>
                <div className="three">
                    <img src={fb} alt="" />
                </div>
            </div>
            <p id="copyright">© 2021 grillNFish bangladesh</p>
        </section>
    );
};

export default Footer;