import React, {useState} from 'react';
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
import {useNavigate} from "react-router-dom";


const AppointmentModal = ({visible, onCancel, doctorId}) => {
    const user = useSelector(selectUser);
    const [dateSelected, setDateSelected] = useState('');
    const [timeSelected, setTimeSelected] = useState([]);
    const [notesForm, setNotesForm] = useState('');
    const navigate = useNavigate();

    const appointment = {
        date: dateSelected,
        time: timeSelected,
        notes: notesForm
    }

    const initialValues = {
        date: '',
        timeRange: [
            moment('09:00', 'HH:mm'),
            moment('10:00', 'HH:mm'),
        ]
    }

    const handleSubmit = event => {
        event.preventDefault();
        const selectedDate = moment(dateSelected).format("YYYY-MM-DD");
        const selectedTime = moment(timeSelected);
        console.log(
            `Selected Date: ${selectedDate} \nSelected Time: ${timeSelected} \nNotes: ${notesForm} \nDoctor: ${doctorId.firstName} ${doctorId.lastName}`
        );
        axios.put(
            'http://localhost:3004/users/22',
            {
                userAppointment: {
                    date: selectedDate,
                    time: timeSelected,
                    notes: notesForm,
                }
            })
        setTimeout(() => {
            navigate(RouteNames.HOME)
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
                            onChange={(time, timeString) => {
                                setTimeSelected(timeString)
                            }}
                            workTime={doctorId.workTime}
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