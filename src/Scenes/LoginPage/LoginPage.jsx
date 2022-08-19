import React, {useContext, useEffect, useRef, useState} from 'react';
import {LoginPageStyled} from "./LoginPage.styled";
import {Formik, Form, Field, ErrorMessage, useFormik, connect} from "formik";
import {loginUser} from "../../store/redux";

const LoginPage = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        loginUser({ username, password });
        console.log(username, password)
    }
    if (props.loading && !props.user) {
        return "Loading";
    }
    if (props.error) {
        return props.error;
    }

    const initialValues = {
        username: '',
        password: ''
    }


    // const loginSchema = Yup.object().shape({
    //     password: Yup.string()
    //         .min(4, "Too Short!")
    //         .max(50, "Too Long!")
    //         .required("Required"),
    //     email: Yup.string().email("Invalid email").required("Required")
    // });

    return (
        <LoginPageStyled>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                        <input
                            type="text"
                            value={username}
                            name="username"
                            placeholder="username"
                            onChange={e => setUsername(e.target.value)}
                        />
                    <input
                        type="password"
                        value={password}
                        name="password"
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type={'submit'}>Login</button>
                </Form>
            </Formik>
        </LoginPageStyled>
    );
};


LoginPage.propTypes = {};
LoginPage.defaultProps = {};

export default LoginPage;