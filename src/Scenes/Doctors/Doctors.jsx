import React, {useEffect, useMemo, useState} from 'react';
import Sorting from "../../components/Sorting/Sorting";
import DoctorList from "../../components/DoctorList/DoctorList";
import {fetchDoctorsList} from "../../api/doctorsApi";
import Pagination from "../../components/Pagination/Pagination";
import MainLayout from "../../Layout/MainLayout";
import {DoctorsStyled} from "./Doctors.styled";
import Search from "../../components/Search/Search";
import SideBar from "../../components/SideBar/Filter";
import SideLayout from "../../Layout/SideLayout";


const Doctors = () => {
    const [selectedSort, setSelectedSort] = useState("");
    const [selectedSpec, setSelectedSpec] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);



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
        async function fetchData() {
            const res = await fetchDoctorsList(limit, page);
            setDoctors(res.data);
            const totalCount = res.headers['x-total-count'];
            setTotalPages(Math.ceil(totalCount / limit));
            console.log(totalPages)
        }
        fetchData();
    }, [page]);


    const sortedDoctors = useMemo(() => {
        if (selectedSort){
            return [...doctors].sort((a, b) => b[selectedSort] - a[selectedSort]);
        }
        if (selectedSpec.length) {
            return [...doctors].filter((doctor) => doctor.lastName === selectedSpec)
        }
        else {
            return doctors;
        }
    },[selectedSort, doctors, selectedSpec]);

    // const filteredDoctors = useMemo(() => {
    //     if (selectedSpec) {
    //         console.log(doctors)
    //         console.log([...doctors].filter((doctor) => doctor.language == "Swedish"))
    //         return [...doctors].filter((doctor) => doctor.language === "Swedish")
    //     }
    // },[selectedSpec, doctors])

    const sortedAndSearchDoctors = useMemo(() => {
        return sortedDoctors.filter(doctor => doctor.firstName.toLowerCase().includes(searchQuery))
    },[searchQuery,sortedDoctors])

    const sortDoctors = (sort) => {
        setSelectedSort(sort);
    };

    const changePage = (page) => {
        setPage(page)
    }

    const filterBySpec = (selectedSpec, event) => {
            setSelectedSpec(selectedSpec);

    }


    return (
        <SideLayout>
            <DoctorsStyled>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <SideBar value={selectedSpec} onChange={filterBySpec}>
                            <Search value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Search"/>
                        </SideBar>
                    </div>
                    <div className="sidebar__content">
                        <div className="list-wrapper">
                            <div className="list-filter">
                                <h3>Contact Therapists around you</h3>
                                <Sorting value={selectedSort}
                                         onChange={sortDoctors}
                                         defaultValue="Sort By"
                                         options={sortingOption}/>
                            </div>
                            {
                                sortedAndSearchDoctors.length ? <DoctorList doctors = {sortedAndSearchDoctors}/> : <h2>Not Found</h2>
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