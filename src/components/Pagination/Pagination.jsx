import React from 'react';
import {getPagesArray} from "../../scripts/pages";

const Pagination = ({changePage, page, totalPages}) => {
    let pagesArr = getPagesArray(totalPages);
    return (
        <div className="pages-wrapper">
            {pagesArr.map(p =>
                <span
                    onClick={() => changePage(p)}
                    className={page === p ? 'page-btn page-btn__current' : 'page-btn'}
                    key={p}>{p}</span>
            )}
        </div>
    );
};

export default Pagination;