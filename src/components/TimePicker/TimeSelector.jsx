import React from 'react';
import moment from "moment";
import {TimePicker} from "antd";

const TimeSelector = ({onChange, workTime, busyStartTime, endTime}) => {
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


    function disabledRangeTime(_, type) {
        const endTime = getEndTime();
        const startTime = getStartTime();
        const newArr = range(0, 24).splice(startTime);
        const endIndex = newArr.indexOf(endTime + 1);
        newArr.splice(endIndex);
        const busyStartArr = busyStartTime.map((value) => Number(moment(value, 'HH:mm').format('H')));
        const disabledWorkHours = [...range(0, 24).filter(value => busyStartArr.includes(value)), ...range(0, 24).filter(value => !newArr.includes(value))]


        if (type === 'start') {
                 const disabledHours = () => {
                    return disabledWorkHours
                 }
                 disabledHours();

        }
        return {
            disabledHours: () => disabledWorkHours,
        }


    }


    return (
        <TimePicker.RangePicker
            defaultOpenValue={moment('00:00', 'HH:mm')}
            format={"HH:mm"}
            minuteStep={30}
            onChange={onChange}
            disabledTime={disabledRangeTime}
            hideDisabledOptions={false}
        />
    );
};

export default TimeSelector;