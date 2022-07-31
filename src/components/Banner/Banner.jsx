import React from 'react';
import Hands from '../../assets/images/Hands.png';
import {BannerStyled} from "./Banner.styled";
import Button from "../ui/Button";

const Banner = () => {
    return (
        <BannerStyled>
            <div className="banner-wrapper">
                <div>
                    <h1>Your reliable tool to find Therapists online</h1>
                    <h4>- Book an online or in person consultation within few steps.</h4>
                    <h4>- See availabilities and background of any specialist.</h4>
                    <h4>- Renew your prescriptions.</h4>
                    <h4>- Take advantage of our database with useful resources.</h4>
                </div>
                <div className="banner-buttons">
                    <div>
                        <Button>Match with doctor</Button>
                    </div>
                    <div>
                        <Button>Discover More</Button>
                    </div>
                </div>
            </div>
            <div className="banner-image">
                <img src={Hands} alt="banner-image"/>
            </div>
        </BannerStyled>
    );
};

export default Banner;