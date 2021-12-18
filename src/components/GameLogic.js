import React, {useState} from 'react'


function gameLogic(cardId, cards, setCards){
      if(cards[cardId][3] === "true") {
        alert("You have selected this one already!")
         
    } else {
        cards[cardId][3] = true
    }
    console.log(cards)
    checkWinCondition(cards)
}   

 
function checkWinCondition(cards){
    let selectedCards = [];
    cards.map(function(card){
         
        if(card[3] === true){
            selectedCards = [...selectedCards, card]
        }
    })
    
    if(cards.length === selectedCards.length) {
        alert("Level completed");
        resetSelectedCards(cards)
    }  
 
}
function resetSelectedCards(cards) {
     
    cards.map(function(card){
        card[3] = false
    })
}
// function randomizeCards(cards){
//     console.log(cards)
// }
function GetCardProps(props) {


    return (
        null
    )
}



export {GetCardProps, gameLogic}