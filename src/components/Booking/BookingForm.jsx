import React, {useEffect, useState} from 'react';
import {
    Button,
    Col,
    Form,
    Input,
    Select,
} from 'antd';
import TextArea from "antd/es/input/TextArea";
import DateSelect from "../DatePicker/DateSelect";
import TimeSelector from "../TimePicker/TimeSelector";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {fetchDoctorAppointment, fetchDoctorsList} from "../../api/doctorsApi";
import {RouteNames} from "../../constants/routes";
import moment from "moment";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};




const BookingForm = ({user, options}) => {
    const [form] = Form.useForm();
    const {id} = useParams();
    const navigate = useNavigate();
    const [selectedDoctor, setSelectedDoctor] = useState('');

    useEffect(() => {
        async function fetchDoctor() {
            const res = await fetchDoctorsList();
            const doctorId = res.data.find(doctor => doctor.id === id);
            setSelectedDoctor(doctorId);
        }
        fetchDoctor();
    }, [id]);



    const onFinish = (values) => {
        axios.post(
            `http://localhost:3004/appointments/`,
            {
                date: moment(values.date).format('MM/DD/YYYY'),
                time: values.time,
                notes: values.notes,
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
                date: values.date,
                startTime: values.time
            }
        )
        setTimeout(() => {
            navigate(RouteNames.MY_APPOINTMENTS)
        }, 1000)
    };

    const [timeAppointment, setTimeAppointment] = useState('');


    const onChangeTime = ({ target: { value } }) => {
        setTimeAppointment(value);
    };

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);



    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                name: user.user.name,
                email: user.user.email,
                date: '',
                time: timeAppointment,
                notes: ''
            }}
            scrollToFirstError
        >
            <Form.Item
                name="name"
                label="Full Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your full name',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="date"
                label={"Date"}
                rules={[
                    {
                        required: true,
                        message: 'Please select date of appointment',
                    },
                ]}
            >
                <DateSelect/>
            </Form.Item>
            <Form.Item
                name={"time"}
                label={"Appointment Time"}
                rules={[
                    {
                        required: true,
                        message: 'Please select time of appointment',
                    },
                ]}
            >
                <TimeSelector
                    user={user}
                    onChange={onChangeTime}
                    optionType="button"
                    buttonStyle="solid"
                />
            </Form.Item>
            <Form.Item
                name="notes"
                label="Notes"
                rules={[
                    {
                        required: false,
                        message: 'Please input Intro',
                    },
                ]}
            >
                <TextArea showCount maxLength={100} autoSize={{
                    minRows: 3,
                    maxRows: 5,
                }}/>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default BookingForm;