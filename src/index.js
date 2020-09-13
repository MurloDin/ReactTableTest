import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from "./store";
import { PeopleDataServiceProvider } from "./components/PeopleData-service-context"
import PeopleDataService from "./services/PeopleDataService";
import ErrorBoundary from "./components/Error-boundary";
import App from "./components/App";


const peopledataService = new PeopleDataService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <PeopleDataServiceProvider value={peopledataService}>
                <App />
            </PeopleDataServiceProvider>
        </ErrorBoundary>
    </Provider>,
  document.getElementById('root')
);

