import React, {useState} from 'react'
import RenderCard from './RenderCards'
import CardsLogic from './cardsLogic'
import lodingImg from "./images/loading.png"


function GameLogic(props){

    const [cards, setCards] = useState([]);
    const [tempCards, setTempCards] = useState([]);
    const [level, setLevel] = useState(props.level)
    const [startOver, setStartOver] = useState(true)
     
    function handleClick(e){
        let currentId = e.target.parentElement.id
    
        if(isNaN(parseInt(currentId))) {
            currentId = e.target.id
            //when clicking a card the user might click between the card description
            //and the card image, and select the div directly, in this case we have no
            //card paren Id to return and the app would crash, so we assign the id 
            //from the card directly, not the parents id as in case of child components
         }  

        if(cards[currentId][3] === true) {
            //game lost, as same card was selected twice
            showGameOver()
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
            <div className="helpWrapper" >
                <div className='helpCard'>
                    <h3 onClick={hideHelpCard}>x</h3>
                    <h2>how to play</h2>
                    <p>The game goal is to select a card, remember its character and not select it again during the same round.</p>
                    <p>Once each card is selected once we advance to the next round, with each additional level
                        we have 4 extra cards to chose from.  </p>
                    <p>The game ends once the same card is selected twice in the same round</p>
                </div>
            </div>
            <div className="gameOverWrap"  >
                <div onClick={hideGameOver}>
                    <h2>Game over</h2>
                    <p>Click here to start over</p>
                </div>
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
                startOver={startOver}
                setCards={setCards} 
                currentLevel={level}
                tempCards={tempCards}
                setTempCards={setTempCards}
            />
        </div>
    )
    function hideHelpCard() {
        document.querySelector(".helpWrapper").style.display = "none";
    }
    function showGameOver() {
        setStartOver(false)
        document.querySelector(".gameOverWrap").style.display = "flex";
    }
    function hideGameOver(){
        setStartOver(true)
        document.querySelector(".gameOverWrap").style.display = "none";
    }
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