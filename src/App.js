import './App.css';
import Header from './components/header'
import CardsLogic from './components/cardsLogic'
import React, {useState, useEffect} from 'react'
import RenderCard from './components/RenderCards'
import {roundLogic, checkWinCondition, shuffle} from './components/GameLogic'

function App() {
  const [cards, setCards] = useState([]);
  const [level, setLevel] = useState(1)
  const [roundWon, setRoundWon] = useState(true)


   
  function handleClick(e){
    let currentId = e.target.parentElement.id

      
    roundLogic(cards[currentId],cards)
    let newCards = shuffle([...cards])
    console.table(cards)
    console.table(newCards)

    setCards(shuffle(newCards))
    // console.table(cards)
    // console.table(newCards)

    if(checkWinCondition(cards) === true) {
      setCards([])
      setLevel(level+1)
      alert("gata runda")
    } else {
 
    }
    
    }



  return (
    <div className="App">
      <Header />
      
      <div className="mainContent">
            <div className="cardsWrapper">     
                {cards.map((elem) => {
                  return <RenderCard 
                    charName={elem[0]} 
                    imgSource={elem[1]} 
                    cardId={elem[2]} 
                    selected={elem[3]}
                    handleClick={(e) => handleClick(e)} 
                  /> 
                })}
            </div>
        </div>
      <CardsLogic cards={cards} setCards={setCards} currentLevel={level} roundWon={roundWon}/>
     </div>
  );
}

export default App;
