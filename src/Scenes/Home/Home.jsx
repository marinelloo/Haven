import React from 'react';
import Banner from "../../components/Banner/Banner";
import MainLayout from "../../Layout/MainLayout";
import QuestionsList from "../../components/Questions/Questions";

const Home = () => {
    return (
        <>
            <Banner/>
            <QuestionsList/>
        </>
    );
};

export default Home;