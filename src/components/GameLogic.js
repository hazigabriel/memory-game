import React, {useState, useEffect} from 'react'



function GameLogic(cardId, cards){
   
    if(cards[cardId][3] == true) {
        //reset game
        alert("You have selected this one already!")
         
    } else {
        cards[cardId][3] = true;
    }
   
    checkWinCondition(cards)

    return shuffle(cards)

}  

function roundLogic(card,cards){
    // cards.map(elem => {
    //     if(elem[0] == card[0]) {
            
    //     }
    //     alert("looped elem is: " + elem[0] + " while clicked elem is" + card[0])
    // })

    if(card[3] == true) {
        //reset game
        alert("You have selected this one already!")
         
    } else {
        card[3] = true
    }
    console.log(card)
    
    

 }
///DE FACUT GAME LOGIC UN FUNCTIONAL COMPONENT OF ITS ON, CARE ACCEPTA PROPS, PENTRU CA CAND DAM CLICK PE UN DIV, SA LUAM DIV ID
//SA TARGETAM CARD STATE, SI SA SA SCHIMBA CARD STATE-UL ALA
 
function checkWinCondition(cards){
    let selectedCards = [];
 
    cards.map(function(card){
         
        if(card[3] === true){
            selectedCards = [...selectedCards, card]
        }
    })
    
    if(cards.length === selectedCards.length) {
        return true        
    }   else {
        return false
    }
 
}
function resetSelectedCards(cards) {
    cards.map(function(card){
        card[3] = false
    })
}
//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(array) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    
    return array
}
 


export { roundLogic, checkWinCondition, shuffle}

