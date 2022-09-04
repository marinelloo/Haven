import React from 'react';
import moment from "moment";
import {TimePicker} from "antd";

const TimeSelector = ({onChange, workTime}) => {

    const getStartTime = () => {
        const startTime = workTime.map(value => value.startTime);
        return Number(moment(startTime, "HH:mm").format('H'));
    }

    const  getEndTime = () => {
        const endTime = workTime.map(value => value.endTime);
        return Number(moment(endTime, "HH:mm").format('H'));
    }


    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    function disabledDateTime() {
        const endTime = getEndTime();
        const startTime = getStartTime();
        return {
            disabledHours: () => range(24, 0).splice(endTime, startTime),
            disabledMinutes: () => range(30, 60),
        };
    }

    function disabledRangeTime(_, type) {
        const endTime = getEndTime();
        const startTime = getStartTime();
        const newArr = range(0, 24).splice(startTime);
        const endIndex = newArr.indexOf(endTime + 1);
        newArr.splice(endIndex);
        if (type === 'start') {
            return {
                disabledHours: () => range(0, 24).filter(value => !newArr.includes(value))
                // disabledMinutes: () => range(30, 60),
            };
        }
        return {
            disabledHours: () => range(0, 24).filter(value => !newArr.includes(value))
            // disabledMinutes: () => range(0, 31),
        };
    }
    return (
        <TimePicker.RangePicker
            defaultOpenValue={moment('00:00', 'HH:mm')}
            format={"HH:mm"}
            minuteStep={30}
            onChange={onChange}
            disabledTime={disabledRangeTime}
            hideDisabledOptions={true}
        />
    );
};

export default TimeSelector;