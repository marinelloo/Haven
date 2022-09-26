import React from 'react';
import {BannerStyled} from "./Banner.styled";
import Button from "../ui/Button";
import {Link} from "react-router-dom";
import Hands from "../../assets/images/hands1.png";


const Banner = () => {
    return (
        <BannerStyled>
            <div className="banner-wrapper">
                <div style={{color: '#F4FAFF'}} className="banner-wrapper__text">
                    <h1><strong>Your tool</strong> to find mental health specialists  online </h1>
                    <p>Reaching out for help has never been easier.
                        Our service will help you find psychologists, therapists and  in your area in a matter
                        of minutes
                    </p>
                    <div className="banner-buttons">
                        <div>
                            <Link to="/doctors">
                                <Button>Search Specialists</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"banner-wrapper__image"}>
                    <img src={Hands} alt={"alt"}/>
                </div>
            </div>
        </BannerStyled>
    );
};

export default Banner;