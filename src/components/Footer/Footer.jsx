import React from 'react';
import {FooterStyled} from "./Footer.styled";
import Logo from '../../assets/images/LogoWhite.svg'

const Footer = () => {
    return (
        <FooterStyled className="footer">
            <div className="footer__wrapper">
                <Logo/>
                <ul className="footer__list">
                    <li>
                        Home
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Terms & Conditions
                    </li>
                </ul>
            </div>
        </FooterStyled>
    );
};

export default Footer;