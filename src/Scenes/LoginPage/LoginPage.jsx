import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {LoginPageStyled} from "./LoginPage.styled";
import {useDispatch} from "react-redux";
import {login} from "../../store/features/user/userSlice";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {RouteNames} from "../../constants/routes";


const SignupSchema = Yup.object().shape({

    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(6, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogin,setIsLogin] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        dispatch(login({
            name: values.name,
            email: values.email,
            password: values.password,
            loggedIn: true
        }))
        setIsLogin(true);
        axios.post(
            'http://localhost:3004/users',
            {
                name: values.name,
                email: values.email,
                password: values.password,
                userAppointment: {},
            })
        setTimeout(() => {
            navigate(RouteNames.HOME)
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
                    // same shape as initial values
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
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </LoginPageStyled>
    );
};

export default LoginPage;