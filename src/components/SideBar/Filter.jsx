import React, {useState} from 'react';
import {FilterStyled} from "./Filter.styled";


const SideBar = () => {
    const [selectedFilter, setSelectedFilter] = useState(false);

    console.log(selectedFilter)


    return (
        <FilterStyled>
            <div className="sidebar-filter">
                <h3>Filters</h3>
                <div className="sidebar__search">

                </div>
                <div className="sidebar-filter__list">
                    <div className="sidebar-filter__profile">
                        <h4>Specification</h4>
                        <ul>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox" defaultChecked={selectedFilter} onChange={() => setSelectedFilter(!selectedFilter)}/>
                                <span>Depression</span>
                            </label>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>Addiction</span>
                            </label>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>Anxiety / stress</span>
                            </label>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>Relationship</span>
                            </label>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>Work</span>
                            </label>
                        </ul>
                    </div>
                    <div className="sidebar-filter__gender">
                        <h4>Gender</h4>
                        <ul>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>Female Therapist</span>
                            </label>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>Male Therapist</span>
                            </label>
                        </ul>
                    </div>
                    <div className="sidebar-filter__language">
                        <h4>Languages</h4>
                        <ul>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>English</span>
                            </label>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>German</span>
                            </label>
                            <label className="sidebar-filter__checkbox">
                                <input type="checkbox"/>
                                <span>Ukrainian</span>
                            </label>
                        </ul>
                    </div>
                </div>
            </div>
        </FilterStyled>
    );
};

export default SideBar;