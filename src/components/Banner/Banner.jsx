import React from 'react';
import {BannerStyled} from "./Banner.styled";
import Button from "../ui/Button";
import {Link} from "react-router-dom";
import Hands from "../../assets/images/Hands.png";


const Banner = () => {
    return (
        <BannerStyled>
            <div className="banner-wrapper">
                <div style={{color: 'white'}} className="banner-wrapper__text">
                    <h1 >Your reliable tool to find Therapists online</h1>
                    <p>- Book an online or in person consultation within few steps.</p>
                    <p>- See availabilities and background of any specialist.</p>
                    <p>- Renew your prescriptions.</p>
                    <p>- Take advantage of our database with useful resources.</p>
                    <div className="banner-buttons">
                        <div>
                            <Link to="/doctors">
                                <Button>Match with doctor</Button>
                            </Link>
                        </div>
                        <div>
                            <Button>Discover More</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"banner-wrapper__image"}>
                <img src={Hands} alt={"alt"}/>
            </div>
        </BannerStyled>
    );
};

export default Banner;