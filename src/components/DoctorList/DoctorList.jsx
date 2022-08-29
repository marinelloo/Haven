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
                <div className="cards-list">
                    {doctors && doctors.map((doctor) => (
                        <DoctorCard doctor={doctor} key={doctor.id}/>
                    ))}
                </div>
            </div>
        </DoctorListStyled>
    );
};

export default DoctorList;