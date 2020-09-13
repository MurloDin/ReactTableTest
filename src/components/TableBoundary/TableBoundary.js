import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import {SubmissionError} from 'redux-form';

import "./TableBoundary.sass";

import {withPeopleDataService} from "../hoc";
import { fetchData, searchData, addData, fetchLargeData } from "../../actions"

import Table from "../Table";
import Form from "../Form/Form";
import Toggle from "../Toggle";
import SearchInput from "../SearchInput";
import Spinner from "../Spinner";
import ErrorIndicator from "../Error-indicator";


const TableBoundary = ({data=[], loading, error, fetchData,
                           fetchLargeData, searchData, addData}) => {

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const [idSort, setIdSort] = useState(1);
    const [firstNameSort, setFirstNameSort] = useState(1);
    const [lastNameSort, setLastNameSort] = useState(1);
    const [emailSort, setEmailSort] = useState(1);

    const [postsPerPage, setPostsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const [showForm, setShowForm] = useState(false);
    const [showDataBtn, setShowDataBtn] = useState(false);

    const [title, setTitle] = useState();

    const sortingById = () => {
        if(idSort === 2){
            data.sort((a, b) => a.id - b.id);
            setTitle(<h1>id отсортирован по возрастанию</h1>);
            setIdSort(1);
        } else {
            data.sort((a, b) => b.id - a.id);
            setTitle(<h1>id отсортирован по убыванию</h1>);
            setIdSort(2);
        }
    };

    const sortingByFirstName = () => {
        if(firstNameSort === 2){
            data.sort((a, b) => {
                return a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1;
                return 0;
            } );
            setTitle(<h1>firstName отсортирован по возрастанию</h1>);
            setFirstNameSort(1);
        } else {
            data.sort((a, b) => {
                return a.firstName.toLowerCase() > b.firstName.toLowerCase() ? -1 : 1;
                return 0;
            });
            setTitle(<h1>firstName отсортирован по убыванию</h1>);
            setFirstNameSort(2);
        }
    };

    const sortingByLastName = () => {
        if(lastNameSort === 2){
            data.sort((a, b) => {
                return a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : 1;
                return 0;
            } );
            setTitle(<h1>lastName отсортирован по возрастанию</h1>);
            setLastNameSort(1);
        } else {
            data.sort((a, b) => {
                return a.lastName.toLowerCase() > b.lastName.toLowerCase() ? -1 : 1;
                return 0;
            });
            setTitle(<h1>lastName отсортирован по убыванию</h1>);
            setLastNameSort(2);
        }
    };

    const sortingByEmail = () => {
        if(emailSort === 2){
            data.sort((a, b) => {
                return a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 1;
                return 0;
            } );
            setTitle(<h1>email отсортирован по возрастанию</h1>);
            setEmailSort(1);
        } else {
            data.sort((a, b) => {
                return a.email.toLowerCase() > b.email.toLowerCase() ? -1 : 1;
                return 0;
            });
            setTitle(<h1>email отсортирован по убыванию</h1>);
            setEmailSort(2);
        }
    };

    const searchBtnClick = inputValue => {
        searchData(inputValue.toLowerCase());
    };

    const loadLargeData = () => {
        setShowDataBtn(!showDataBtn);
        fetchLargeData();
    };

    const loadSmallData = () => {
        setShowDataBtn(!showDataBtn);
        fetchData();
    };

    const submit = values => {
        if (Array.from(data, item => item.id).includes(values.id)) {
            throw new SubmissionError ({
                id : "Такой id уже существует",
            });
        } else {
            addData({...values, address: {
                    streetAddress: 'none',
                    city: 'none',
                    state: 'none',
                    zip: 'none'
                },
                description: 'none'
            });
        }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentData = data.slice(indexOfFirstPost, indexOfLastPost);

    if (loading) {
        return <Spinner />
    }

    if(error) {
        return <ErrorIndicator />
    }

    return(
        <>
            <SearchInput searchBtnClick={searchBtnClick} />
            {title}
            <button className="btn btn-dark mb-3"
                    onClick={() => setShowForm(!showForm)}>
                {showForm ? "Скрыть форму" : "Показать форму"}
            </button>
            {showForm ? <Form onSubmit={submit}/> : ""}
            <Toggle postsPerPage={postsPerPage}
                    loadLargeData={loadLargeData}
                    loadSmallData={loadSmallData}
                    setCurrentPage={setCurrentPage}
                    setPostsPerPage={setPostsPerPage}
                    showDataBtn={showDataBtn}
            />
            <Table postsPerPage={postsPerPage}
                   setCurrentPage={setCurrentPage}
                   count={data.length}
                   currentData={currentData}
                   sortingById={sortingById}
                   sortingByFirstName={sortingByFirstName}
                   sortingByLastName={sortingByLastName}
                   sortingByEmail={sortingByEmail}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.dataState.data.filter(({id, firstName, lastName, email}) => {
            return (
                toString(id).toLowerCase().indexOf(state.dataState.searchString) !== -1 ||
                firstName.toLowerCase().indexOf(state.dataState.searchString) !== -1 ||
                lastName.toLowerCase().indexOf(state.dataState.searchString) !== -1 ||
                email.toLowerCase().indexOf(state.dataState.searchString) !== -1
            )
        }),
        loading: state.dataState.loading,
        error: state.dataState.error
    };
};

const mapDispatchToProps = (dispatch, {peopledataService} ) => {
    return {
        fetchData: fetchData(peopledataService, dispatch),
        fetchLargeData: fetchLargeData(peopledataService, dispatch),
        searchData: str => dispatch(searchData(str)),
        addData: data => dispatch(addData(data))
    };
};


export default withPeopleDataService()
    (connect(mapStateToProps, mapDispatchToProps)
    (TableBoundary));
