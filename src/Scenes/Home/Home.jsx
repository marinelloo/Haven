import React from 'react';
import Banner from "../../components/Banner/Banner";
import QuestionsList from "../../components/Questions/Questions";
import MainLayout from "../../Layout/MainLayout";

const Home = () => {


    return (
        <MainLayout>
            <Banner/>
            <QuestionsList/>
        </MainLayout>
    );
};

export default Home;