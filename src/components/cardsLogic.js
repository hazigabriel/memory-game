import React, {useState, useEffect} from 'react'
 

function CardsLogic(props) {
 
  
    const randomCharacterNumber = () => {
         //return a random number between 1 and 826
         //as our api currently has 826 possible characters
        let number = Math.floor(Math.random() * 826)
        if(number < 1) {
            return number + 1
        }
        return number
     }
    //no of cards per row, to be multiplied by the level no, for eg for for level one we have 4 cards, 
    //1*4, for level two we have 8 cards, 2*4
    const cardsNo = 8 ; 

    useEffect(() => {
        if(cardsNo === props.cards.length){
 
            console.log(props.cards)
        } else {
         
            fetch("https://rickandmortyapi.com/api/character/"+randomCharacterNumber())
            .then(result => result.json())
            .then(
                (result) => {
                    let newCard = [result.name, result.image]
                    props.setCards([...props.cards, newCard])
                },
                (error) => {
                    alert("error while loading api")
                }
            )
         }
    }, [props.cards])
    return (
        null
    )
}

export default CardsLogic 
