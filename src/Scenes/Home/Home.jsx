import React from 'react';
import MainLayout from "../../Layout/MainLayout";
import Banner from "../../components/Banner/Banner";
import QuestionsList from "../../components/Questions/Questions";


const Home = () => {

    return (
        <MainLayout>
            <Banner/>
            <QuestionsList/>
        </MainLayout>
    );
};

export default Home;