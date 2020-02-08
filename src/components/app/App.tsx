import React from 'react';
import './App.scss';
import { Card } from '../card/Card';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1 className="title">MBus</h1>
      </header>
      <div className="cardList">
        <Card></Card>
      </div>
    </div>
  );
};

export default App;
