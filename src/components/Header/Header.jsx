import React from 'react';
import Logo from "../../assets/images/Logo.svg";
import {HeaderStyled} from "./Header.styled";

const Header = () => {
    return (
        <HeaderStyled className="header">
            <div className="header-wrapper">
                <Logo className="header__logo"/>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Our Therapists
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            </div>
        </HeaderStyled>
    );
};

export default Header;