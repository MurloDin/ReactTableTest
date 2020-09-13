const dataLoaded = (newData) => {
    return {
        type: 'DATA_LOADED',
        payload: newData
    };
};

const dataRequested = () => {
    return {
        type: 'DATA_REQUESTED'
    };
};

const dataError = (error) => {
    return {
        type: 'DATA_ERROR',
        payload: error
    };
};

const searchData = (str) => {
    return {
        type: 'SEARCH_DATA',
        payload: str
    };
};

const addData = (data) => {
    return {
        type: 'DATA_ADD',
        payload: data
    };
};


const fetchData = (peopledataService, dispatch) => () => {
    dispatch(dataRequested());
    peopledataService.getData()
        .then((res) => {
            dispatch(dataLoaded(res.data));
        })
        .catch((err) => {
            dispatch(dataError(err));
        });
};

const fetchLargeData = (peopledataService, dispatch) => () => {
    dispatch(dataRequested());
    peopledataService.getLargeData()
        .then((res) => {
            dispatch(dataLoaded(res.data));
        })
        .catch((err) => {
            dispatch(dataError(err));
        });
};

export {
    fetchData,
    fetchLargeData,
    searchData,
    addData
};
