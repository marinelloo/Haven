import React, {useEffect, useState} from 'react';
import MainLayout from "../../Layout/MainLayout";
import {BookingStyled} from "./Booking.styled";

import {useParams} from "react-router-dom";

import {useSelector} from "react-redux";
import {selectUser} from "../../store/features/user/userSlice";
import BookingForm from "../../components/Booking/BookingForm";

const Booking = (props) => {
    const {id} = useParams();
    const user = useSelector(selectUser);

    return (
        <MainLayout>
            <BookingStyled>
                <h2>Set Appointment</h2>
                    <BookingForm user={user} id={id}/>
            </BookingStyled>
        </MainLayout>
    );
};

export default Booking;