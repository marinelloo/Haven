import React from "react";
import { SortingStyled } from "./Sorting.styled";

function Sorting({ options, defaultValue, value, onChange }) {
    return (
        <SortingStyled>
            <select value={value} onChange={(event) => onChange(event.target.value)}>
                <option disabled value="">
                    {defaultValue}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </SortingStyled>
    );
}

export default Sorting;