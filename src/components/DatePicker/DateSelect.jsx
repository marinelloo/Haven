import React from 'react';
import moment from "moment";
import {DatePicker, Form, Space} from "antd";
import {DateSelectStyled} from "./DateSelect.styled";

const DateSelect = ({onChange, label}) => {
    let blockDate = ['2022-09-13', '2020-10-28'];
    let currentDate = moment().format('YYYY-MM-DD')
    return (
        <div>
            <Form.Item>
                <DatePicker  onChange = {onChange}
                             disabledDate={ d => !d
                                 || d.isBefore(currentDate)
                                 || currentDate < moment().endOf('day')
                                 || blockDate.findIndex(date=>date===moment(d).format('YYYY-MM-DD')) !== -1}
                />
            </Form.Item>
        </div>
    );
};

export default DateSelect;