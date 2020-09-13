import React, {useState} from "react";

import InformationSection from "../InformationSection";
import Pagination from "../Pagination";

const init = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
    },
    description: '',
}

const Table = ({ currentData, setCurrentPage, count,
                 postsPerPage, sortingById, sortingByFirstName,
                 sortingByLastName, sortingByEmail }) => {

    const [peopleInfo, setPeopleInfo] = useState(init);
    const [visibleInfo, setVisibleInfo] = useState(false);

    const rowClick = (idx) => {
        const newInfo = currentData.find(({id}) => id === idx);
        setPeopleInfo(newInfo);
        setVisibleInfo(true);
    };

    return (
        <div>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col" onClick={sortingById}>id</th>
                        <th scope="col" onClick={sortingByFirstName}>firstName</th>
                        <th scope="col" onClick={sortingByLastName}>lastName</th>
                        <th scope="col" onClick={sortingByEmail}>email</th>
                        <th scope="col" onClick={sortingByEmail}>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentData.map(({id, firstName, lastName, email, phone}, idx) => (
                            <tr key={idx} onClick={() => rowClick(id)}>
                                <th>{id}</th>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination setCurrentPage={setCurrentPage}
                        totalPosts={count}
                        postsPerPage={postsPerPage}
            />
            <InformationSection data={peopleInfo}
                                visible={visibleInfo}
            />
        </div>
    );
};

export default Table;
