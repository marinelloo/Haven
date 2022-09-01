import React from 'react';
import moment from "moment";
import {DatePicker, Form, Space} from "antd";
import {DateSelectStyled} from "./DateSelect.styled";

const DateSelect = ({onChange, label}) => {
    return (
        <div>
            <Form.Item>
                <DatePicker  onChange = {onChange}
                             disabledDate={(current) => {
                                 let customDate = moment().format("YYYY-MM-DD");
                                 return current && current < moment(customDate, "YYYY-MM-DD");
                             }}
                />
            </Form.Item>
        </div>
    );
};

export default DateSelect;