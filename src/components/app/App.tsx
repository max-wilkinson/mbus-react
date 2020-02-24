import React from 'react';
import { CardList } from '../cardList/CardList';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import accentBars from '../../assets/accentBars.svg';
import './App.scss';

const client = new ApolloClient({
  uri: 'https://mbusql.azurewebsites.net/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <img src={accentBars} className="accentBars topBars" alt="" />
        <header>
          <h1 className="title">MBus</h1>
        </header>
        <div className="cardList">
          <CardList></CardList>
        </div>
        <img src={accentBars} className="accentBars bottomBars" alt="" />
      </div>
    </ApolloProvider>
  );
};

export default App;
