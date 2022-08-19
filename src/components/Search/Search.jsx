import React, {useState} from 'react';
import {SearchStyled} from "./Search.styled";

const Search = ({value,onChange, placeholder}) => {
    return (
        <SearchStyled value={value} onChange={onChange} placeholder={placeholder}/>
    );
};

export default Search;