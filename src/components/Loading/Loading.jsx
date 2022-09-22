import React, {useState} from 'react';
import {LoadingStyled} from "./Loading.styled";

const Loading = () => {
    return (
        <LoadingStyled>
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        </LoadingStyled>
    );
};

export default Loading;