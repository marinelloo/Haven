import React from 'react';
import moment from "moment";
import {DatePicker} from "antd";

const DateSelect = ({showTime, format, minuteStep, onSelect}) => {
    let blockDate = ['2022-09-13', '2020-10-28'];
    let currentDate = moment().format('YYYY-MM-DD');

    return (
        <DatePicker
            showTime={showTime}
            format={format}
            minuteStep={minuteStep}
            onSelect={onSelect}
        />
    );
};

export default DateSelect;