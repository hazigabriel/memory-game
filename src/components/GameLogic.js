import React, {useState} from 'react'


function gameLogic(e){

    if(e.target.parentElement.dataset.selected === "true") {
        alert("You have selected this one already!")
         
    } else {
        e.target.parentElement.dataset.selected = true
    }
    
    checkWinCondition()
}

 
function checkWinCondition(){
    let cards = Array.from(document.querySelectorAll(".card"));
    let selectedCards = [];
    cards.map(function(card){
        if(card.dataset.selected === 'true'){
            selectedCards = [...selectedCards, card]
        }
    })
    
    if(cards.length === selectedCards.length) {
        alert("Bravo ba");
        resetSelectedCards()
    }  
 
}
function resetSelectedCards() {
    let cards = Array.from(document.querySelectorAll(".card"));
    cards.map(function(card){
        card.dataset.selected = false;
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