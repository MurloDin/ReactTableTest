import React from 'react';
import { PeopleDataServiceConsumer } from '../PeopleData-service-context';

const withPeopleDataService = () => (Wrapped) => {

    return (props) => {
        return (
            <PeopleDataServiceConsumer>
            {
                (peopledataService) => {
                    return (<Wrapped {...props}
                                     peopledataService={peopledataService}/>
                    );
                }
            }
            </PeopleDataServiceConsumer>
        );
    };
};

export default withPeopleDataService;
