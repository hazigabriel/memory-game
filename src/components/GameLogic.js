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
    cards.map(elem => {
        if(elem[0] == card[0]) {
            //alert("looped elem is: " + elem[0] + " while clicked elem is" + card[0])
            if(card[3] == true) {
                //reset game
                alert("You have selected this one already!")
                 
            } else {
                card[3] = true
            }
        }
    })

    //trebuie sa targetam functia asta, sa map-uim peste carti pana gasesti id ul cartii click-uite, si abia dupa sa updatam daca a fost aleasa
    // if(card[3] == true) {
    //     //reset game
    //     alert("You have selected this one already!")
         
    // } else {
    //     card[3] = true
    // }
     
    

 }
 
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
    };
    console.log(array)
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


export { roundLogic, checkWinCondition, shuffle, swiftId}

