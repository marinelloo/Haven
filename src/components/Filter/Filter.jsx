import React, {useState} from 'react';
import {FilterStyled} from "./Filter.styled";
import {Checkbox, Space} from "antd";


const Filter = (props) => {
    const [selectedFilter, setSelectedFilter] = useState(false);
    const [spec, setSpec] = useState('');

    const genderOption = [
        {
            value: "male",
            name: "Male Therapist"
        },
        {
            value: "female",
            name: "Female Therapist"
        }
    ];


    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues)
    }


    return (
        <FilterStyled>
            <div className="sidebar-filter">
                <h3>Filters</h3>
                <div className="sidebar-filter__list">
                    <div className="sidebar-search">
                        {props.children}
                    </div>
                    <Space direction="vertical"
                           size="middle"
                           style={{
                               display: 'flex',
                           }}>
                    </Space>
                </div>
            </div>
        </FilterStyled>
    );
};

export default Filter;