import './App.css';
import Header from './components/header'
import React, {useState, useEffect} from 'react'
import GameLogic from './components/GameLogic'

function App() {
   
  const [level, setLevel] = useState(1)
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
 
  
 
  //as the state setter is async, we are awaiting the currentScore to be fully assigned(via the gameLogic component)before we assign a bestScore value
  useEffect(() => {
    if(currentScore > bestScore) {
      setBestScore(currentScore)
 
    }
  }, [currentScore, bestScore])


  return (
    <div className="App">

      <Header 
        currentScore={currentScore} 
        bestScore={bestScore}
      />
      
      <GameLogic 
        level={level}
        setLevel={setLevel}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />

    </div>
  );
}

export default App;
