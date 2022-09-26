import React from 'react';
import MainLayout from "../../Layout/MainLayout";
import Banner from "../../components/Banner/Banner";
import QuestionsList from "../../components/Questions/Questions";
import FloatingButton from "../../components/ui/FloatingButton";
import {Link} from "react-router-dom";
import {RouteNames} from "../../constants/routes";


const Home = () => {

    return (
        <MainLayout>
            <Banner/>
            <Link to={RouteNames.BLOG}>
                <FloatingButton>
                    Contact Us
                </FloatingButton>
            </Link>
        </MainLayout>
    );
};

export default Home;