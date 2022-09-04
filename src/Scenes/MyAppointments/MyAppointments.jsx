import React, {useEffect, useState} from 'react';
import UserLayout from "../../Layout/UserLayout";
import {fetchUserAppointment} from "../../api/usersApi";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import {useSelector} from "react-redux";
import {selectUser} from "../../store/features/user/userSlice";

const MyAppointments = () => {
    const [userAppointment, setUserAppointment] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        async function fetchData() {
            const res = await fetchUserAppointment(user.userId);
            setUserAppointment(res.data);
        }
        fetchData();
    }, [])

    return (
        <UserLayout>
            <AppointmentCard appointments={userAppointment}/>
        </UserLayout>
    );
};

export default MyAppointments;