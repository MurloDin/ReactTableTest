import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as dataReducer} from './reducers';

const reducers = {
    form: formReducer,
    dataState: dataReducer
}

const reducer = combineReducers(reducers)

const store = createStore(reducer);

export default store;
