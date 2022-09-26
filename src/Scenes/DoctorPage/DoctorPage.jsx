import React, {useState,useEffect} from 'react';
import MainLayout from "../../Layout/MainLayout";
import {generatePath, Link, useHistory, useNavigate, useParams} from "react-router-dom";
import {fetchDoctorsList} from "../../api/doctorsApi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {DoctorPageStyled} from "./DoctorPage.styled";
import Booking from "../Booking/Booking";
import BlueButton from "../../components/ui/BlueButton";


const arrowRight = <FontAwesomeIcon icon={faStar} />;

const DoctorPage = () => {
    const {id} = useParams();
    const [doctorPage,setDoctorPage] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);


    useEffect(() => {
        async function fetchDoctor() {
            const res = await fetchDoctorsList();
            const doctorId = res.data.find(doctor => doctor.id === id);
            setDoctorPage(doctorId)
        }
        fetchDoctor();
    }, [id]);

    return (
        <MainLayout>
            <DoctorPageStyled className={"doctor-wrapper"}>
                <div className="doctor__content">
                    <div className="doctor__profile">
                        <img
                            alt="doctor-avatar"
                            src={doctorPage.profileURL}
                            className="doctor__avatar"
                        />
                        <div className="doctor__rating">
                            {arrowRight}
                            {doctorPage.rating}
                        </div>
                    </div>
                    <div className="doctor__text">
                        <h2>{doctorPage.firstName} {doctorPage.lastName}</h2>
                        <div className="doctor__btns">
                            <Link to={`/${id}/booking`} component={<Booking doctorId={id}/>}>
                                <BlueButton>Book Appointment</BlueButton>
                            </Link>
                        </div>
                        <div className={"doctor__description"}>
                            <p>
                                {doctorPage.profileDesc}
                            </p>
                        </div>
                        <div className={"doctor__education"}>
                            <h3>License</h3>
                            <p>
                                {doctorPage.license}
                            </p>
                        </div>
                        <div className={"doctor__rates"}>

                        </div>
                    </div>
                </div>
            </DoctorPageStyled>
        </MainLayout>
    );
};

export default DoctorPage;