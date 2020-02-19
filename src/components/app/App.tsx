import React from 'react';
import './App.scss';
import { Card } from '../card/Card';
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
          <Card stopId={137}></Card>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
