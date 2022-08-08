import React, {useEffect, useMemo, useState} from 'react';
import Sorting from "../../components/Sorting/Sorting";
import DoctorList from "../../components/DoctorList/DoctorList";
import MainLayout from "../../Layout/MainLayout";
import {fetchDoctorsList} from "../../api/doctorsApi";
import SideBar from "../../components/SideBar/Filter";
import SideLayout from "../../Layout/SideLayout";
import Filter from "../../components/SideBar/Filter";
import Input from "../../components/ui/Input";
import Search from "../../components/Search/Search";

const Doctors = () => {
    const [selectedSort, setSelectedSort] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

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
            const res = await fetchDoctorsList();
            setDoctors(res);
        }
        fetchData();
    }, []);


    const sortedDoctors = useMemo(() => {
        if (selectedSort){
            return [...doctors].sort((a, b) => b[selectedSort] - a[selectedSort]);
        } else {
            return doctors;
        }
    },[selectedSort, doctors]);

    const sortedAndSearchDoctors = useMemo(() => {
        console.log(searchQuery)
        return sortedDoctors.filter(doctor => doctor.firstName.toLowerCase().includes(searchQuery))
    },[searchQuery,sortedDoctors])

    const sortDoctors = (sort) => {
        setSelectedSort(sort);
    };

    return (
        <SideLayout>
            <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Search"/>
            <Sorting value={selectedSort}
                     onChange={sortDoctors}
                     defaultValue="Sort By"
                     options={sortingOption}/>
            {
                sortedAndSearchDoctors.length ? <DoctorList doctors = {sortedAndSearchDoctors}/> : <h2>Not Found</h2>
            }

        </SideLayout>
    );
};

export default Doctors;