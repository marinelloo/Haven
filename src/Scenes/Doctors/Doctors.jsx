import React, {useEffect, useMemo, useState} from 'react';
import Sorting from "../../components/Sorting/Sorting";
import DoctorList from "../../components/DoctorList/DoctorList";
import {
    fetchDoctorsList,
    filterDoctorsList,
    filterDoctorsListByGender,
    searchDoctorsList,
    sortDoctorList
} from "../../api/doctorsApi";
import Pagination from "../../components/Pagination/Pagination";
import MainLayout from "../../Layout/MainLayout";
import {DoctorsStyled} from "./Doctors.styled";
import Search from "../../components/Search/Search";
import SideBar from "../../components/Filter/Filter";
import SideLayout from "../../Layout/SideLayout";
import Filter from "../../components/Filter/Filter";
import {Checkbox} from "antd";


const Doctors = () => {
    const [selectedSort, setSelectedSort] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filterGender, setFilterGender] = useState([]);
    const [filterLanguage, setFilterLanguage] = useState([]);

    const sortingOrderAsc = 'asc';
    const sortingOrderDesc = 'desc';

    const sortingOption = [
        {
            value: "firstName",
            name: "Sort By Name",
        },
        {
            value: "rating",
            name: "Sort By Rating",
        },
        {
            value: "conversations",
            name: "Sort By Number of Sessions",
        }
    ]


    useEffect(() => {
        if (selectedSort !== 'rating') {
            async function sortDoctors1() {
                const res = await sortDoctorList(selectedSort, sortingOrderAsc);
                setDoctors(res.data)
            }
            sortDoctors1();
        } else if (selectedSort === 'rating'){
            async function sortDoctors1() {
                const res = await sortDoctorList(selectedSort, sortingOrderDesc);
                setDoctors(res.data)
            }
            sortDoctors1();
        }
        else {
            async function fetchData() {
                const res = await fetchDoctorsList(limit, page);
                setDoctors(res.data);
                const totalCount = res.headers['x-total-count'];
                setTotalPages(Math.ceil(totalCount / limit));
            }
            fetchData();
        }

    }, [page, selectedSort]);


    useEffect(() => {
       async function searchDoctorList() {
           const res = await searchDoctorsList(searchQuery);
           setDoctors(res.data)
       }
       searchDoctorList();
    },[searchQuery])

    useEffect(() => {
        if (filterGender.length) {
            async function filterByGender() {
                const res = await filterDoctorsListByGender(filterGender)
                setDoctors(res.data)
            }
            filterByGender();
        } else {
            console.log('filter something')
        }
    },[filterGender, filterLanguage])

    const sortDoctors = (sort) => {
        setSelectedSort(sort);
    };

    const changePage = (page) => {
        setPage(page)
    }


    const onChangeGender = (checkedValues) => {
        setFilterGender(checkedValues)
        console.log('checked = ', checkedValues)
    }

    const onChangeLanguage = (checkedValues) => {
        setFilterLanguage(checkedValues)
        console.log('checked language = ', checkedValues)
    }

    const genderOption = [
        {
            label: "Male Therapist",
            value: "male",

        },
        {
            label: "Female Therapist",
            value: "female",

        }
    ];

    const languageOption = [
        {
            value: "eng",
            label: "English"
        },
        {
            value: "geu",
            label: "German"
        },
        {
            value: "ukr",
            label: "Ukrainian"
        },
    ]


    return (
        <SideLayout>
            <DoctorsStyled>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                            <div className={"sidebar__search"}>
                                <Search value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Search"/>
                            </div>
                            <div className={"sidebar__gender"}>
                                <h3>Gender</h3>
                                <Checkbox.Group options={genderOption} onChange={onChangeGender}/>
                            </div>
                            <div className={"sidebar__language"}>
                                <h3>Languages</h3>
                                <Checkbox.Group options={languageOption} onChange={onChangeLanguage} className={"gender-list"}/>
                            </div>
                    </div>
                    <div className="sidebar__content">
                        <div className="list-wrapper">
                            <div className="list-filter">
                                <h3>Contact Therapists around you</h3>
                                <Sorting
                                        value={selectedSort}
                                         onChange={sortDoctors}
                                         defaultValue="Sort By"
                                         options={sortingOption}/>
                            </div>
                            {
                                <DoctorList doctors = {doctors}/>
                            }
                        </div>
                        <Pagination page={page}  totalPages = {totalPages} changePage={changePage}/>
                    </div>
                </div>
            </DoctorsStyled>
        </SideLayout>
    );
};

export default Doctors;