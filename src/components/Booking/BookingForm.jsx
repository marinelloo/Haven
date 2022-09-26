import React, {useEffect, useState} from 'react';
import {
    Button,
    Col, DatePicker,
    Form,
    Input,
    Select,
} from 'antd';
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {fetchDoctorAppointment, fetchDoctorsList} from "../../api/doctorsApi";
import {RouteNames} from "../../constants/routes";
import moment from "moment";


const { Option } = Select;

const BookingForm = ({user, options}) => {
    const [form] = Form.useForm();
    const {id} = useParams();
    let blockDate = ['2022-09-13', '2020-10-28'];
    let currentDate = moment().format('YYYY-MM-DD');
    const navigate = useNavigate();
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [formLayout, setFormLayout] = useState('vertical');
    const [dateSelected, setDateSelected] = useState('');
    const [timeSelected, setTimeSelected] = useState([]);
    const [busyStartTimeDoctor, setBusyStartTimeDoctor] =useState([]);
    const [busyEndTimeDoctor, setBusyEndTimeDoctor] =useState([]);
    const [workTimeDoctor, setWorkTimeDoctor] = useState([]);


    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: { span: 14, offset: 4 },
            }
            : null;

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;

    useEffect(() => {
        async function fetchDoctor() {
            const res = await fetchDoctorsList();
            const time = await fetchDoctorAppointment(id)
            const doctorId = res.data.find(doctor => doctor.id === id);
            const doctorStartTime = time.data.map(value => value.startTime);
            const doctorEndTime = time.data.map(value => value.endTime);
            setWorkTimeDoctor(doctorId.workTime);
            setSelectedDoctor(doctorId);
            setBusyStartTimeDoctor(doctorStartTime);
            setBusyEndTimeDoctor(doctorEndTime);
        }
        fetchDoctor();
    }, [id]);


    const onFinish = (values) => {
        axios.post(
            `http://localhost:3004/appointments/`,
            {
                date: moment(dateSelected).format('MM/DD/YYYY HH:mm'),
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
    const [selectedDate, setSelectedDate] = useState()

    const getStartTime = () => {
        const startTime = workTimeDoctor.map(value => value.startTime);
        return Number(moment(startTime, "HH:mm").format('H'));
    }

    const  getEndTime = () => {
        const endTime = workTimeDoctor.map(value => value.endTime);
        return Number(moment(endTime, "HH:mm").format('H'));
    }


    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }


    function disabledRangeTime(_, type) {
        const endTime = getEndTime();
        const startTime = getStartTime();
        const newArr = range(0, 24).splice(startTime);
        const endIndex = newArr.indexOf(endTime + 1);
        newArr.splice(endIndex);
        const busyStartArr = busyStartTimeDoctor.map((value) => Number(moment(value, 'HH:mm').format('H')));
        const disabledWorkHours = [...range(0, 24).filter(value => busyStartArr.includes(value)), ...range(0, 24).filter(value => !newArr.includes(value))]


        if (type === 'start') {
            const disabledHours = () => {
                return disabledWorkHours
            }
            disabledHours();

        }
        return {
            disabledHours: () => disabledWorkHours,
        }


    }

    return (
        <Form
            form={form}
            {...formItemLayout}
            layout={"vertical"}
            name="booking"
            onFinish={onFinish}
            initialValues={{
                layout: formLayout,
                name: user.name,
                email: user.email,
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
                label="Date"
                rules={[
                    {
                        required: true,
                        message: 'Please select date of appointment',
                    },
                ]}
            >
                <DatePicker
                    showTime={"true"}
                    format={"DD-MM-YYYY HH:mm"}
                    minuteStep={30}
                    onSelect={(value) => setDateSelected(value)}
                    disabledTime={disabledRangeTime}
                    disabledDate={d => !d
                        || d.isBefore(currentDate)
                        || currentDate < moment().endOf('day')
                        || blockDate.findIndex(date=>date===moment(d).format('YYYY-MM-DD')) !== -1}
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
            <Form.Item {...buttonItemLayout}>
                <Button danger onClick={() => navigate(-1)}>Cancel</Button>
                <Button type="primary" htmlType="submit" style={{
                    margin: '0 8px',
                }}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default BookingForm;