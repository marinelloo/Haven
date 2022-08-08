import React, {useEffect, useState} from 'react';
import {fetchDoctorsList} from "../../api/doctorsApi";
import {DoctorListStyled} from "./DoctorList.styled";
import DoctorCard from "../DoctorCard/DoctorCard";
import axios from "axios";
import {Link} from "react-router-dom";

const DoctorList = ({doctors}) => {
    return (
        <DoctorListStyled>
            <div>
                <div className="list-wrapper">
                    <div className="list-filter">
                        <h3>Contact Therapists around you</h3>
                    </div>
                </div>
                <div className="cards-list">
                    {doctors && doctors.map((doctor) => (
                        <DoctorCard doctor={doctor} key={doctor.id}/>
                    ))}
                </div>
                <div className="btn-light view-all">
                    <Link to="/doctors-list">View All</Link>
                </div>
            </div>
        </DoctorListStyled>
    );
};

export default DoctorList;