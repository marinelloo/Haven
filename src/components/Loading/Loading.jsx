import React, {useState} from 'react';
import {LoadingStyled} from "./Loading.styled";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(false);

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