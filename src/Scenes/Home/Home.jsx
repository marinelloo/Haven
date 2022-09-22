import React from 'react';
import MainLayout from "../../Layout/MainLayout";
import Banner from "../../components/Banner/Banner";
import QuestionsList from "../../components/Questions/Questions";
import FloatingButton from "../../components/ui/FloatingButton";


const Home = () => {

    return (
        <MainLayout>
            <Banner/>
            <FloatingButton>
                Contact Us
            </FloatingButton>
        </MainLayout>
    );
};

export default Home;