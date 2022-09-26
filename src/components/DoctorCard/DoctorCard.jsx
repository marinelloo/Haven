import React, {useEffect} from 'react';
import {DoctorCardStyled} from "./DoctorCard.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import BlueButton from "../ui/BlueButton";
import WhiteButton from "../ui/WhiteButton";
import { Link, useNavigate} from "react-router-dom";
import Booking from "../../Scenes/Booking/Booking";
import {Button} from "antd";


const arrowRight = <FontAwesomeIcon icon={faStar} />;

const DoctorCard = (props) => {

    return (
        <DoctorCardStyled className="doctor">
            <div className="doctor-wrapper">
                <div className="doctor__content">
                    <div className="doctor__profile">
                        <img
                            alt="doctor-avatar"
                            src={props.doctor.profileURL}
                            className="doctor__avatar"
                        />
                        <div className="doctor__rating">
                            {arrowRight}
                            {props.doctor.rating}
                        </div>
                    </div>
                    <div className="doctor__description">
                        <h3>{props.doctor.firstName}</h3>
                        <h4>{props.doctor.job}</h4>
                        <p>{props.doctor.profileDesc}</p>
                        <div className="doctor__btns">
                            <Link to={`/doctors/${props.doctor.id}`}>
                                <WhiteButton>More Info</WhiteButton>
                            </Link>
                            <Link to={`/${props.doctor.id}/booking`} component={<Booking doctorId={props.doctor.id}/>}>
                                <BlueButton>Book Appointment</BlueButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </DoctorCardStyled>
    );
};

export default DoctorCard;