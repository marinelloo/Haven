import React, {useEffect, useMemo, useState} from 'react';
import Sorting from "../../components/Sorting/Sorting";
import DoctorList from "../../components/DoctorList/DoctorList";
import {
    fetchDoctorsList,
    filterDoctorsListByGender, filterDoctorsListByLanguage, filterDoctorsListBySpec, justFilter,
    searchDoctorsList,
    sortDoctorList
} from "../../api/doctorsApi";
import {DoctorsStyled} from "./Doctors.styled";
import SideLayout from "../../Layout/SideLayout";
import {Checkbox, Collapse, Input} from "antd";
import NoSearchResults from "../../components/NoSearchResults/NoSearchResults";



const Doctors = () => {
    const {Panel} = Collapse;
    const {Search} = Input;
    const [selectedSort, setSelectedSort] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filterGender, setFilterGender] = useState([]);
    const [filterLanguage, setFilterLanguage] = useState([]);
    const [filterSpec, setFilterSpec] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                setIsLoading(false)
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
        async function filterList() {
            const res = await justFilter(filterGender, filterLanguage, filterSpec);
            setDoctors(res.data)
        }
        filterList()
    }, [filterGender, filterLanguage, filterSpec])

    const sortDoctors = (sort) => {
        setSelectedSort(sort);
    };
    const changePage = (page) => {
        setPage(page)
    };
    const onChangeGender = (checkedValues) => {
        setFilterGender(checkedValues)
    };
    const onChangeLanguage = (checkedValues) => {
        setFilterLanguage(checkedValues)
    };
    const onChangeSpec = (checkedValues) => {
        setFilterSpec(checkedValues)
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
            value: "English",
            label: "English"
        },
        {
            value: "German",
            label: "German"
        },
        {
            value: "Ukrainian",
            label: "Ukrainian"
        },
        {
            value: "Telugu",
            label: "Telugu"
        },
        {
            value: "Hindi",
            label: "Hindi"
        },
        {
            value: "Swedish",
            label: "Swedish"
        },
        {
            value: "Spanish",
            label: "Spanish"
        }
    ];
    const specificationOption = [
        {
            label: "Depression",
            value: "Depression"
        },
        {
            label: "Anger Management",
            value: "Anger Management"
        },
        {
            label: "Domestic Violence",
            value: "Domestic Violence"
        },
        {
            label: "Abuse",
            value: "Abuse"
        },
        {
            label: "Anger",
            value: "Anger"
        },
        {
            label: "Anxiety / stress",
            value: "Anxiety / stress"
        },
        {
            label: "Dissociative disorders",
            value: "Dissociative disorders"
        },
    ];

    const onSearch = (value) => setSearchQuery(value);

    return (
        <SideLayout>
            <DoctorsStyled>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                            <div className={"sidebar__search"}>
                                <Search onSearch={onSearch} placeholder="Search"/>
                            </div>
                                <Collapse ghost>
                                    <Panel header={"Gender"} key={1}>
                                        <Checkbox.Group options={genderOption} onChange={onChangeGender} className={"gender-list"}/>
                                    </Panel>
                                </Collapse>
                                <Collapse ghost>
                                    <Panel key={2} header={"Language"}>
                                        <Checkbox.Group options={languageOption} onChange={onChangeLanguage} className={"language-list"}/>
                                    </Panel>
                                </Collapse>
                            <Collapse ghost>
                                <Panel key={3} header={"Specification"}>
                                    <Checkbox.Group options={specificationOption} onChange={onChangeSpec} className={"language-list"}/>
                                </Panel>
                            </Collapse>
                    </div>
                    <div className="sidebar__content">
                        <div className="list-wrapper">
                            <div className="list-filter">
                                <>
                                    <h3>Contact Therapists around you</h3>
                                    <Sorting
                                        value={selectedSort}
                                        onChange={sortDoctors}
                                        defaultValue="Sort By"
                                        options={sortingOption}/>
                                </>
                            </div>
                            {
                                doctors.length ? <DoctorList doctors = {doctors}/> : <NoSearchResults/>
                            }
                        </div>
                    </div>
                </div>
            </DoctorsStyled>
        </SideLayout>
    );
};

export default Doctors;