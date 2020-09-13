import React from "react";


const initialState = {
    data: [],
    loading: true,
    error: null,
    searchString: ""
};


const reducer = (state=initialState, action) => {

    switch (action.type) {
        case "DATA_LOADED":
            return {
                data: action.payload,
                loading: false,
                error: null,
                searchString: ""
            };
        case "DATA_REQUESTED":
            return {
                data: [],
                loading: true,
                error: null,
                searchString: ""
            };
        case 'DATA_ERROR':
            return {
                data: [],
                loading: false,
                error: action.payload,
                searchString: ""
            };
        case 'SEARCH_DATA':
            return {
                ...state,
                searchString: action.payload
            }
        case 'DATA_ADD':
            return {
                data: state.data.unshift(action.payload),
                loading: false,
                error: null,
                ...state
            };
        default:
            return state;
    }
};

export { reducer };
