import './App.css';
import Header from './components/header'
import CardsLogic from './components/cardsLogic'
import React, {useState, useEffect} from 'react'
import RenderCard from './components/RenderCards'
import {roundLogic, checkWinCondition, shuffle, swiftId} from './components/GameLogic'

function App() {
  const [cards, setCards] = useState([]);
  const [level, setLevel] = useState(1)
  const [roundWon, setRoundWon] = useState(true)
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
 
  
 

  function handleClick(e){
    let currentId = e.target.parentElement.id

    if(cards[currentId][3] == true) {
      //resetRound
      alert("You lost, mate");
      setCards([])
      setLevel(1)
      setCurrentScore(0)
    } else {
      cards[currentId][3] =true;
      setCurrentScore(currentScore + 1);
      
      let newCards = shuffle([...cards]);
      swiftId(newCards);
      setCards(newCards);
      if(checkWinCondition(cards) === true) {
        setCards([])
        setLevel(level+1)
        alert("Advanced to level" + level +1)
       }
       
    }
    
   
    
    

 
    }



  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      
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
