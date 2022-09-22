import React from 'react';
import {NoSearchResultsStyled} from "./NoSearchResults.styled";
import NoSearchResultsImg from '../../assets/images/search.png'

const NoSearchResults = () => {
    return (
        <NoSearchResultsStyled>
            <img src={NoSearchResultsImg} alt={"no-results"}/>
            <h2>No Search Results are found</h2>
        </NoSearchResultsStyled>
    );
};

export default NoSearchResults;