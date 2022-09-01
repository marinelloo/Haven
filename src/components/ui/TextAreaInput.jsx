import React from 'react';
import {Input} from "antd";

const TextAreaInput = ({onChange, value}) => {
    return (
        <Input.TextArea value={value} onChange={onChange} />
    );
};

export default TextAreaInput;