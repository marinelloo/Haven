import React, { useState } from 'react';
import { Radio } from 'antd';
import {TimeSelectorStyled} from "./TimeSelector.styled";
import {useParams} from "react-router-dom";
import {range} from "../../scripts/time";
import {useEffect} from "react";
import {fetchDoctorAppointment, fetchDoctorsList} from "../../api/doctorsApi";
import moment from "moment";


const options = [
    {
        label: 'Apple',
        value: 'Apple',
    },
    {
        label: 'Pear',
        value: 'Pear',
    },
    {
        label: 'Orange',
        value: 'Orange',
    },
];


const TimeSelector = ({onChange, buttonStyle, optionType}) => {
    const {id} = useParams();
    const [busyStartTimeDoctor, setBusyStartTimeDoctor] = useState(null);
    const [busyEndTimeDoctor, setBusyEndTimeDoctor] = useState(null);
    const [bookedDoctorTime, setBookedDoctorTime] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState('');


    const timeRangeArr = range(busyStartTimeDoctor, busyEndTimeDoctor);
    let optionsArr = [];

    useEffect(() => {
        async function fetchDoctor() {
            const res = await fetchDoctorsList();
            const resDoctorTime = await fetchDoctorAppointment(id);
            const doctorId = res.data.find(doctor => doctor.id === id);
            const doctorStartTime = doctorId.workTime.map(value => value.startTime)
            const doctorEndTime = doctorId.workTime.map(value => value.endTime);
            setBookedDoctorTime(resDoctorTime.data)
            setSelectedDoctor(doctorId);
            setBusyStartTimeDoctor(Number(moment(doctorStartTime, "HH:mm").format('H')));
            setBusyEndTimeDoctor(Number(moment(doctorEndTime, "HH:mm").format('H')));
        }
        fetchDoctor();
    }, [id]);

        const items = []
        for (let hour = busyStartTimeDoctor; hour < busyEndTimeDoctor; hour++) {
            items.push({
                label: moment({ hour}).format('h:mm A'),
                value: moment({ hour}).format('h:mm A'),
            }
            )
            items.push(
                {
                    label: moment({ hour, minute: 30 }).format('h:mm A'),
                    value: moment({ hour, minute: 30 }).format('h:mm A'),
                }

            )
        }


    return (
        <TimeSelectorStyled>
            <Radio.Group
                options={items}
                onChange={onChange}
                optionType={optionType}
                buttonStyle={buttonStyle}
            />
        </TimeSelectorStyled>
    );
};

export default TimeSelector;