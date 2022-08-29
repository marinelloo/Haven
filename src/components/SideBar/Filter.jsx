import React, {useState} from 'react';
import {FilterStyled} from "./Filter.styled";


const SideBar = (props,{onChange}) => {

    const [selectedFilter, setSelectedFilter] = useState(false);
    const [spec, setSpec] = useState('');

    const specOption = [
        {
            value: "Lau",
            name: "Depression",
        },
        {
            value: "addiction",
            name: "Addiction",
        },
        {
            value: "anxietyStress",
            name: "Anxiety / stress",
        }
    ];

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

    const languageOption = [
        {
            value: "eng",
            name: "English"
        },
        {
            value: "geu",
            name: "German"
        },
        {
            value: "ukr",
            name: "Ukrainian"
        },
    ]


    return (
        <FilterStyled>
            <div className="sidebar-filter">
                <h3>Filters</h3>
                <div className="sidebar-filter__list">
                    <div className="sidebar__search">
                        {props.children}
                    </div>
                    <div className="sidebar-filter__profile">
                        <h4>Specification</h4>
                        <ul>
                            {specOption.map((option) => (
                                <label className="sidebar-filter__checkbox" key={option.value}>
                                <input value={option.value} type="checkbox" onClick={(event) => onChange(event.target.value)}/>
                                <span>{option.name}</span>
                                </label>
                            ))}
                        </ul>
                    </div>
                    <div className="sidebar-filter__gender">
                        <h4>Gender</h4>
                        <ul>
                            {genderOption.map((option) => (
                                <label className="sidebar-filter__checkbox">
                                    <input value={option.value} key={option.value} type="checkbox"/>
                                    <span>{option.name}</span>
                                </label>
                            ))}
                        </ul>
                    </div>
                    <div className="sidebar-filter__language">
                        <h4>Languages</h4>
                        <ul>
                            {languageOption.map((option) => (
                                <label className="sidebar-filter__checkbox">
                                    <input type="checkbox" value={option.value} key={option.value}/>
                                    <span>{option.name}</span>
                                </label>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </FilterStyled>
    );
};

export default SideBar;