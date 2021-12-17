import './App.css';
import Header from './components/header'
import CardsLogic from './components/cardsLogic'
import React, {useState, useEffect} from 'react'
import RenderCards from './components/RenderCards'
import {GetCardProps} from './components/GameLogic'

function App() {
  const [cards, setCards] = useState([]);

  
  return (
    <div className="App">
      <GetCardProps />
      <Header />
      
      <CardsLogic cards={cards} setCards={setCards}/>
      <RenderCards cards={cards}/>
    </div>
  );
}

export default App;
