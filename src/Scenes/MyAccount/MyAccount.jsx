import React, {useState} from 'react';
import UserLayout from "../../Layout/UserLayout";
import {useDispatch, useSelector} from "react-redux";
import {login, selectUser} from "../../store/features/user/userSlice";
import { Formik, Form, Field } from 'formik';
import {MyAccountStyled} from "./MyAccount.styled";
import {SignupSchema} from "../../scripts/validationForm";
import axios from "axios";
import {RouteNames} from "../../constants/routes";
import {useNavigate} from "react-router-dom";
import {uploadImage} from "../../api/uploadImage";

const MyAccount = () => {
    const user = useSelector(selectUser);
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const initialValues = {
        name: user.user.name,
        email: user.user.email,
        lastName: user.user.lastName,
        password: user.user.password
    }


    const handleSubmit = (values) => {
        dispatch(login({
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            loggedIn: true
        }))
        axios.post(
            'http://localhost:3004/users',
            {
                name: values.name,
                email: values.email,
                password: values.password,
                lastName: values.lastName,
                userAppointment: {},
            })
        setTimeout(() => {
            navigate(RouteNames.HOME)
        }, 1000)
    }


    return (
        <UserLayout>
            <MyAccountStyled>
            <div>Welcome, {initialValues.name}</div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={SignupSchema}
                >
                    <Form className={"account-form"}>
                        <div>
                            <h3>Upload and Display Image usign React Hook's</h3>
                            {selectedImage && (
                                <div className={"photo-image"}>
                                    <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                </div>
                            )}
                            <input
                                type="file"
                                name="myImage"
                                accept={"image/*"}
                                onChange={(event) => {
                                    setSelectedImage(event.target.files[0]);
                                }}
                            />
                        </div>
                        <label htmlFor="firstName">First Name</label>
                        <Field  name="name" placeholder="Name" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" placeholder="Last Name"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field id="password" name="password" type="password" placeholder="Enter Password"/>

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </MyAccountStyled>
        </UserLayout>
    );
};

export default MyAccount;