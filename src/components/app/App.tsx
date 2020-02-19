import React from 'react';
import './App.scss';
import { CardList } from '../cardList/CardList';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://mbusql.azurewebsites.net/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <header>
          <h1 className="title">MBus</h1>
        </header>
        <div className="cardList">
          <CardList></CardList>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
