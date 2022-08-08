import React from 'react';
import Logo from "../../assets/images/Logo.svg";
import {HeaderStyled} from "./Header.styled";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <HeaderStyled className="header">
            <div className="header-wrapper">
                <Link to="/home">
                    <Logo className="header__logo"/>
                </Link>
                <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/doctors">
                        <li>Our Therapists</li>
                    </Link>
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