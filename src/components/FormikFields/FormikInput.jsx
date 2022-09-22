import React, {Component} from 'react';
import {FormikInputStyled} from "./FormikInput.styled";
import PropTypes from "prop-types";
import {useField} from "formik";

const FormikInput = (props) => {
    const {field, meta, helpers} = useField(props.name);

    return(
        <FormikInputStyled>
            <input {...field} {...props }/>
        </FormikInputStyled>
    )
}

FormikInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default FormikInput;