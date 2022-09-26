import React, {useState, useEffect} from 'react';
import {AppointmentCardStyled} from "./AppointmentCard.styled";
import moment from "moment";
import {Link} from "react-router-dom";


const AppointmentCard = ({appointments}) => {
    return (
       <AppointmentCardStyled>
           {appointments.map((appointment) => (
               <div className={"appointment-card"} key={Date.now()}>
                   <div className={"appointment-card__doctor"}>
                       <div className={'doctorPhoto'}>
                           <img src={appointment.doctorPhoto}/>
                       </div>
                       <div className={"doctor-info"}>
                           <Link to={`/doctors/${appointment.doctorId}`}>
                               <div className={"doctor-name"}>
                                   <h5>{appointment.doctorName} {appointment.doctorLastName}</h5>
                               </div>
                           </Link>
                           <h6>
                               {appointment.doctorJob}
                           </h6>
                       </div>
                   </div>
                   <div className={"appointment-card__user"}>
                       <h6 className={"appointment-date"}>
                           {moment(`${appointment.date}`).format('LL HH:mm')}
                       </h6>
                       <div>
                           <h6>Notes for Appointment</h6>
                           <p>
                               {appointment.notes}
                           </p>
                       </div>
                       <div></div>
                   </div>
               </div>
           ))}
       </AppointmentCardStyled>
    );
};

export default AppointmentCard;