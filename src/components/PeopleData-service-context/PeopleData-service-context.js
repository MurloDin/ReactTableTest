import React from 'react';

const {
  Provider: PeopleDataServiceProvider,
  Consumer: PeopleDataServiceConsumer
} = React.createContext();

export {
  PeopleDataServiceProvider,
  PeopleDataServiceConsumer
};
