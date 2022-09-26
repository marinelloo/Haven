import React, {useState} from 'react';
import {Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import BlueButton from "../ui/BlueButton";
import {ContactUsStyled} from "./ContactUs.styled";
import axios from "axios";
import moment from "moment";



const ContactUs = () => {
    const [contactFormComplete, setContactFormComplete] = useState(false);
    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post(
            `http://localhost:3004/contact-info/`,
            {
                name: values.name,
                email: values.email,
                notes: values.notes
            }
        )
        setContactFormComplete(true)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <ContactUsStyled>
            {contactFormComplete ? <div className={"contact-us-success"}>
                    <h2>Thank you for contacting us! </h2>
                    <h4>We will respond shortly</h4>
                </div> :
                <>
                <h2>Contact Us</h2>
                <Form
                className={"contact-us-form"}
                name="contactUs"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout={"horizontal"}
                >
                <Form.Item
                label="Name"
                name="name"
                rules={[
            {
                required: true,
                message: 'Please input your username!',
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
                name="notes"
                label="Notes"
                rules={[
            {
                required: true,
                message: 'Please input message',
            },
                ]}
                >
                <TextArea showCount maxLength={100} autoSize={{
                minRows: 3,
                maxRows: 5,
            }}/>
                </Form.Item>
                <Form.Item
                className={"contact-submit"}
                >
                <BlueButton type="primary" htmlType="submit">
                Submit
                </BlueButton>
                </Form.Item>
                </Form>
                </>
            }
        </ContactUsStyled>

    );
};

export default ContactUs;