import React from 'react';
import Logo from "../../assets/images/Logo.svg";
import {HeaderStyled} from "./Header.styled";
import {Link, useNavigate} from "react-router-dom";
import {RouteNames} from "../../constants/routes";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "../../store/features/user/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const navigate = useNavigate();
    const userIcon = <FontAwesomeIcon icon={faUser} />

    const user = useSelector(selectUser)
    return (
        <HeaderStyled className="header">
            <div className="header-wrapper">
                <Link to="/home">
                    <Logo className="header__logo"/>
                </Link>
                <ul>
                    <Link to={RouteNames.HOME}>
                        <li>Home</li>
                    </Link>
                    <Link to={RouteNames.DOCTORS}>
                        <li>Our Therapists</li>
                    </Link>
                    <Link to={RouteNames.BLOG}>
                        <li>
                            Contact Us
                        </li>
                    </Link>
                    {
                        user ?
                            <>
                                <Link to={RouteNames.MY_ACCOUNT}>
                                    <li className={"account-icon"}>{userIcon}</li>
                                </Link>
                            </>
                            :
                            <Link to={RouteNames.LOGIN}>
                                <li>Login</li>
                            </Link>
                    }

                </ul>
            </div>
        </HeaderStyled>
    );
};

export default Header;