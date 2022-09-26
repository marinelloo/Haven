import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {LoginPageStyled} from "./LoginPage.styled";
import {useDispatch} from "react-redux";
import {login, setId} from "../../store/features/user/userSlice";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {RouteNames} from "../../constants/routes";
import {SignupSchema} from "../../scripts/validationForm";


const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogin,setIsLogin] = useState(false);
    const [accountId, setAccountId] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(accountId)
    let userId;

    const handleSubmit = (values) => {
        axios.post(
            'http://localhost:3004/users',
            {
                name: values.name,
                email: values.email,
                password: values.password,
                userAppointment: {},
            }).then(response => {
                dispatch(login({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    loggedIn: true,
                    userId: response.data.id
            }))
            setIsLogin(true);
            }
        )
        setTimeout(() => {
            navigate(RouteNames.HOME)
            setAccountId(userId)
        }, 1000)
    }
    return (
        <LoginPageStyled>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={( values) => {
                    setName(values.name);
                    setPassword(values.password);
                    setEmail(values.email)
                    handleSubmit(values)
                }}
                className="form"
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="name" className="form-input" placeholder="Name"/>
                            {errors.name && touched.name ? (
                                <div className="form-error">{errors.name}</div>
                            ) : null}
                        <Field type="password" name="password" placeholder="Password"/>
                        {errors.password && touched.password ? (
                            <div className="form-error">{errors.password}</div>
                        ) : null}
                        <Field name="email" type="email" placeholder="Email"/>
                        {errors.email && touched.email ? <div className="form-error">{errors.email}</div> : null}
                        <button type="submit" className={"login-button"}>Submit</button>
                    </Form>
                )}
            </Formik>
        </LoginPageStyled>
    );
};

export default LoginPage;