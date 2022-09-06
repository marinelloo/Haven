import React, {useReducer, useState, useEffect} from 'react';
import {Button, Modal, Space} from "antd";
import moment from "moment";
import {Field, Form, Formik} from "formik";
import TimeSelector from "../TimePicker/TimeSelector";
import DateSelect from "../DatePicker/DateSelect";
import TextAreaInput from "../ui/TextAreaInput";
import {useDispatch, useSelector} from "react-redux";
import {login, selectUser, userAppointment} from "../../store/features/user/userSlice";
import axios from "axios";
import {RouteNames} from "../../constants/routes";
import {useNavigate, useParams} from "react-router-dom";
import {fetchDoctorAppointment, fetchDoctorsList} from "../../api/doctorsApi";
import doctors from "../../Scenes/Doctors/Doctors";
import {validate} from "@babel/core/lib/config/validation/options";


const AppointmentModal = ({visible, onCancel, doctorId}) => {
    const {id} = useParams();
    const user = useSelector(selectUser);
    const [dateSelected, setDateSelected] = useState('');
    const [timeSelected, setTimeSelected] = useState([]);
    const [notesForm, setNotesForm] = useState('');
    const navigate = useNavigate();

    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [busyStartTimeDoctor, setBusyStartTimeDoctor] =useState([]);
    const [busyEndTimeDoctor, setBusyEndTimeDoctor] =useState([]);

    useEffect(() => {
        async function fetchDoctor() {
            const res = await fetchDoctorsList();
            const time = await fetchDoctorAppointment(id)
            const doctorId = res.data.find(doctor => doctor.id === id);
            const doctorStartTime = time.data.map(value => value.startTime);
            const doctorEndTime = time.data.map(value => value.endTime);
            setSelectedDoctor(doctorId);
            setBusyStartTimeDoctor(doctorStartTime);
            setBusyEndTimeDoctor(doctorEndTime);
        }
        fetchDoctor();
    }, [id]);


    const initialValues = {
        date: '',
        timeRange: [
            moment('09:00', 'HH:mm'),
            moment('10:00', 'HH:mm'),
        ]
    }

    const handleSubmit = event => {
        event.preventDefault();
        const duration = moment.duration(moment(timeSelected[1]).diff(moment(timeSelected[0]))).asMinutes().toFixed();
        axios.post(
            `http://localhost:3004/appointments/`,
                {
                    date: dateSelected,
                    time: timeSelected[0],
                    notes: notesForm,
                    userId: user.userId,
                    doctorName: selectedDoctor.firstName,
                    doctorLastName: selectedDoctor.lastName,
                    doctorJob: selectedDoctor.job,
                    doctorPhoto: selectedDoctor.profileURL,
                    doctorId: id
                }
            )
        axios.post(`http://localhost:3004/doctorAppointment/`,
            {
                doctorId: id,
                date: dateSelected,
                startTime: moment(timeSelected[0]).format('HH:mm'),
                endTime: moment(timeSelected[1]).format('HH:mm'),
                duration: duration
            }
            )
        setTimeout(() => {
            navigate(RouteNames.MY_APPOINTMENTS)
        }, 1000)
    };

    return (
        <Modal visible={visible} footer={null} title={"Book Appointment"} onCancel={() => onCancel()}>
            <Formik initialValues={initialValues}>
                <Form onSubmit={handleSubmit}>
                    <Space direction={"vertical"} style={{width: '100%'}}>
                        <label>Select Date of appointment</label>
                                <Field
                                    name={"date"}
                                    component={DateSelect}
                                    onChange={ (date, dateString) => (
                                        setDateSelected(dateString))}
                                />
                        <label>Select Time of your appointment</label>
                        <Field
                            name={"timeRange"}
                            component={TimeSelector}
                            startTime={timeSelected[0]}
                            endTime={timeSelected[1]}
                            onChange={(time, timeString) => {
                                setTimeSelected(time)
                            }}
                            workTime={doctorId.workTime}
                            busyStartTime={busyStartTimeDoctor}
                            busyEndTime={busyEndTimeDoctor}
                        />
                        <label>Additional Notes</label>
                        <Field
                            component={TextAreaInput}
                            name={"notes"}
                            value={notesForm}
                            onChange={(e) => setNotesForm(e.target.value)}
                        />
                        <Button htmlType="submit">Submit</Button>
                    </Space>
                </Form>
            </Formik>
        </Modal>
    );
};

export default AppointmentModal;