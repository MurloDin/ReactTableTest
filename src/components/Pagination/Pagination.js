import React, {useState} from "react";

import "./Pagination.sass";


const Pagination = ({ postsPerPage, totalPosts, setCurrentPage}) => {

    const [position, setPosition] = useState(1);

    const pageNumbers = [];

    const first = position - 2 <= 1 ? 1 : position - 2;
    const pagesCount = Math.ceil(totalPosts / postsPerPage);
    const last = position + 2 >= pagesCount ? pagesCount : position + 2;

    for(let i = first;
        i <= last; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center ">
                <li className="page-item ">
                    <a className="page-link"
                       href="#"
                       onClick={
                           () => {
                               setCurrentPage(1)
                               setPosition(1)
                           }
                       }>First</a>
                </li>
                {
                    pageNumbers.map((number) =>
                        (
                            <li key={ number } className="page-item">
                                <a href="!#"
                                   className="page-link"
                                   onClick={
                                       () => {
                                           setCurrentPage(number)
                                           setPosition(number)
                                       }
                                   }>{ number }</a>
                        </li>
                    ))
                }
                <li className="page-item">
                    <a className="page-link"
                       href="#"
                       onClick={
                           () => {
                               setCurrentPage(pagesCount)
                               setPosition(pagesCount)
                           }
                       }>Last</a>
                </li>
            </ul>
        </nav>
    );
};


export default Pagination;
