import React, {useState} from 'react';
import {Button, DatePicker, Input, Modal, Space, TimePicker} from "antd";
import moment from "moment";
import {Formik,Field, Form} from "formik";
import errors from "babel-loader/lib/Error";
import touched from "babel-loader/lib/Error";


const AppointmentModal = ({visible, onCancel}) => {
    const [dateSelected, setDateSelected] = useState('');
    const [timeSelected, setTimeSelected] = useState('');
    const [notes, setNotes] = useState('');

    const appointment = {
        date: dateSelected,
        time: timeSelected,
        notes: notes
    }

    function sendAppointment(){

    }
    return (
        <Modal visible={visible} footer={null} title={"Book Appointment"} onCancel={() => onCancel()}>
            <Formik>
                <Form>
                    <Space direction={"vertical"}>
                        <label>Select Date of your appointment</label>
                        <DatePicker onChange = {(date, dateString) => (
                            setDateSelected(dateString)
                        )}/>
                        <label>Select Time of your appointment</label>
                        <TimePicker.RangePicker
                            defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                            onChange={(time, timeString) => (
                                setTimeSelected(timeString)
                            )}/>
                        <label>Additional Notes</label>
                        <Input.TextArea />
                        <Button onClick={() =>
                            (console.log("click"))
                        }>Submit</Button>
                    </Space>
                </Form>
            </Formik>
        </Modal>
    );
};

export default AppointmentModal;