import React from 'react';
import MainLayout from "../../Layout/MainLayout";
import BackImage from '../../assets/images/mug.png'
import {ErrorPageStyled} from "./ErrorPage.styled";

const ErrorPage = () => {
    return (
        <MainLayout>
            <ErrorPageStyled>
                <img src={BackImage} className="error-image"/>
                <h1>This Page is Broken</h1>
                <p>
                    This mug was a family heirloom. Of your neighbor. Your neighbor always loved the color, shape, and quantity of coffee held by this mug. But your neighbor moved out and left it on their porch, no explanation, no repair materials, no nothing. So you have this broken mug.
                </p>
            </ErrorPageStyled>
        </MainLayout>
    );
};

export default ErrorPage;