import React, {useState} from 'react'
import RenderCard from './RenderCards'
import CardsLogic from './cardsLogic'
import lodingImg from "./images/loading.png"


function GameLogic(props){

    const [cards, setCards] = useState([]);
    const [tempCards, setTempCards] = useState([]);
    const [level, setLevel] = useState(props.level)
  
    function handleClick(e){
        let currentId = e.target.parentElement.id
    
        if(cards[currentId][3] === true) {
            //resetRound
            alert("Lost game tho")
            setCards([])
            setTempCards([])
            setLevel(1)
            props.setCurrentScore(0)  
        } else {
            cards[currentId][3] =true;
            props.setCurrentScore(props.currentScore + 1);
      
            let newCards = shuffle([...cards]);
            swiftId(newCards);
            setCards(newCards);
            if(checkWinCondition(cards) === true) {
                setCards([])
                setTempCards([])
                setLevel(level+1)
                
            }
        }
      } 
    //console.log(cards)
    return (
        <div className="mainContent">
             <div className="loadingContainer">
                <img src={lodingImg} alt="loading" className="loadingImg"></img>   
            </div>
            <div className="cardsWrapper">     
                {cards.map((elem) => {
                  return <RenderCard 
                    key={elem[2]}
                    charName={elem[0]} 
                    imgSource={elem[1]} 
                    cardId={elem[2]} 
                    selected={elem[3]}
                    handleClick={(e) => handleClick(e)} 
                  /> 
                })}
            </div>
            <CardsLogic 
                
                setCards={setCards} 
                currentLevel={level}
                tempCards={tempCards}
                setTempCards={setTempCards}
            />
        </div>
    )
}

 
function checkWinCondition(cards){
    let selectedCards = [];
 
    cards.map(function(card){


        if(card[3] === true){
            selectedCards = [...selectedCards, card]
        }

        //added return just to avoid the console warning
        return null 
    })
    
    if(cards.length === selectedCards.length) {
        return true        
    }   else {
        return false
    }
 
}
 
//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(array) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    };
    //console.log(array)
    return array
}
 
function swiftId(array){
    //after the elements are swifted, their ID remains the same, when clicking the element we obtain the parentsId, and after shuffling the cards
    //the ID no longe
    for(let i = 0; i < array.length; i++){
        array[i][2] = i;
     }
    return array
}


export default GameLogic

