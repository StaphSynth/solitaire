import React, { Component } from 'react';
import Card from './components/card.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {cards()}
      </div>
    );
  }
}

const cards = () => {
  const cards = [];

  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={i} value={i} />);
  }

  return cards;
};

export default App;
